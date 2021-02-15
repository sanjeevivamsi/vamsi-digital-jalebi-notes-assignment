import { makeStyles } from "@material-ui/core";
const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "fantasy",
    color: "#4267B2",
    fontWeight: "bolder",
  },
  margin: {
    margin: theme.spacing(1),
    textTransform: "capitalize",
  },
  navbar: {
    backgroundColor: "#fff",
  },
}));
export default useNavStyles;
