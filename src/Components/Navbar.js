import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Hidden } from "@material-ui/core";
import useNavStyles from "../Themes/NavStyles";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const classes = useNavStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            NOTES
          </Typography>
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            <Button
              color="primary"
              className={classes.margin}
              variant="contained"
              style={
                props.authFinder ? { display: "none" } : { display: "block" }
              }
            >
              Signup
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button
              color="primary"
              className={classes.margin}
              variant="contained"
              style={
                props.authFinder ? { display: "none" } : { display: "block" }
              }
            >
              Login
            </Button>
          </Link>
          <Hidden only="xs">
            <Typography
              color="primary"
              variant="subtitle1"
              style={
                props.authFinder
                  ? { display: "inline", marginRight: "20px" }
                  : { display: "none" }
              }
            >
              welcome:{props.loggedinUser.email}
            </Typography>
          </Hidden>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button
              color="secondary"
              size="medium"
              className={classes.margin}
              variant="contained"
              style={
                props.authFinder ? { display: "block" } : { display: "none" }
              }
              onClick={props.onLogout}
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
