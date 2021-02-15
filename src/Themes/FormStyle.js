import { makeStyles } from "@material-ui/core";
const useFormStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(4, 0, 0),
  },
  heading: {
    color: "#000000",
    fontWeight: "400",
    display: "flex",
    alignSelf: "flex-start",
  },
  avatar: {
    padding: 25,
  },
  input: {
    marginTop: theme.spacing(2),
    color: "#4267B2",
    outline: "none",
  },
  loading: {
    marginRight: theme.spacing(2),
  },
}));
export default useFormStyles;
