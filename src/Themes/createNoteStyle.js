import { makeStyles } from "@material-ui/core";
const useFormStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  input: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  loading: {
    marginRight: theme.spacing(2),
  },
  buttonWrapper: {
    marginTop: theme.spacing(-4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
  },
}));
export default useFormStyles;
