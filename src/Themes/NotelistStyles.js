import { makeStyles } from "@material-ui/core";

const useListStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(6, 0, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    overflow: "hidden",
  },
  heading: {
    marginLeft: theme.spacing(4),
  },
  list: {
    height: "63vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflowY: "scroll",
    marginLeft: theme.spacing(3),
  },
  listItem: {
    maxHeight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingRight: theme.spacing(8),
  },
  listText: {
    color: "#4791db",
    textTransform: "capitalize",
    fontSize: "small",
    fontWeight: "400",
  },
  listText1: {
    color: "#757ce8",
    fontSize: "8px",
    fontWeight: "250",
  },
  createNote: {
    color: "#FFF",
    padding: 13,
    fontSize: "large",
    textTransform: "capitalize",
    fontWeight: 300,
  },
  icon: {
    marginRight: "auto",
    marginLeft: theme.spacing(3),
  },
  text: {
    marginRight: "auto",
  },
  divider: {
    backgroundColor: "teal",
    height: "3px",
  },
  iconButton: {
    marginLeft: theme.spacing(2),
  },
}));
export default useListStyles;
