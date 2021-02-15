import { ThemeProvider } from "@material-ui/core";
import Theme from "./Themes/MuiTheme";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import NoteList from "./Components/NoteList";
import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import useLocalStorage from "./customHooks/useLocalStorage";
import Navbar from "./Components/Navbar";
import * as firebaseCalls from "./services/firebase";
import app from "./services/firebase";
function App() {
  const [loginAuthenticated, setLoginAuthenticated] = useLocalStorage(
    "loggedin",
    false
  );
  const [loggedinUser, setLoggedinUser] = useLocalStorage("user", {});
  useEffect(() => {
    function initiateApp() {
      app.auth().onAuthStateChanged((user) => {
        if (user) {
          let data = {
            id: user.uid,
            email: user.email,
          };
          setLoggedinUser(data);
          setLoginAuthenticated(true);
        } else {
          setLoggedinUser({});
          setLoginAuthenticated(false);
        }
      });
    }
    initiateApp();
  }, []);

  const handleSignupSubmit = async (email, password) => {
    await firebaseCalls.addUser(email, password);
  };
  const handleUserLogoutclick = async () => {
    await firebaseCalls.logoutUser();
  };

  const handleLoginSubmit = async (email, password) => {
    await firebaseCalls.loginUser(email, password);
  };
  return (
    <ThemeProvider theme={Theme}>
      <Navbar
        onLogout={handleUserLogoutclick}
        loggedinUser={loggedinUser}
        authFinder={loginAuthenticated}
      />
      <Switch>
        <ProtectedRoute
          exact
          path="/notes"
          component={NoteList}
          appProps={{
            authFinder: loginAuthenticated,
            to: "/",
            loggedinUser: loggedinUser,
          }}
        />
        <ProtectedRoute
          exact
          path="/"
          component={Login}
          functionCall={handleLoginSubmit}
          appProps={{ authFinder: !loginAuthenticated, to: "/notes" }}
        />
        <ProtectedRoute
          exact
          path="/signup"
          component={Signup}
          appProps={{ authFinder: !loginAuthenticated, to: "/notes" }}
          functionCall={handleSignupSubmit}
        />
      </Switch>
    </ThemeProvider>
  );
}
export default App;
