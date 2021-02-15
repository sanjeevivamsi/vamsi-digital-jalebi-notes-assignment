import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },

    success: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
