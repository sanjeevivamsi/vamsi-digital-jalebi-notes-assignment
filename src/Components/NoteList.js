import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import CreateNoteForm from "./CreateNote";

import useListStyles from "../Themes/NotelistStyles";
import uuid from "react-uuid";
import * as firebaseCalls from "../services/firebase";
import { LinearProgress } from "@material-ui/core";
function NoteList(props) {
  const [userNotes, setUserNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    const initializeNoteList = async () => {
      const noteData = await firebaseCalls.getUserNotes(props.loggedinUser.id);
      if (!mounted) {
        return;
      }

      setUserNotes(noteData);
      setLoading(false);
    };
    initializeNoteList();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDeleteNoteClick = async (id) => {
    await firebaseCalls.deleteNote(id);
    setUserNotes((prevState) => {
      const newState = prevState.filter((note) => note.id !== id);
      return newState;
    });
  };

  const classes = useListStyles();
  if (loading) {
    return <LinearProgress />;
  } else {
    if (userNotes.length !== 0) {
      return (
        <Grid xs={12} className={classes.paper} position="static">
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h4" component="h1">
              Your Notes
            </Typography>
            <hr />
          </Grid>
          <Grid item xs={12}>
            <CreateNoteForm
              {...props}
              userNotes={userNotes}
              setUserNotes={setUserNotes}
            />
          </Grid>
          <Grid item xs={12}>
            <List className={classes.list}>
              {userNotes.map((userNote, index) => {
                const noteNumber = index + 1;
                return (
                  <ListItem dense className={classes.listItem} key={uuid()}>
                    <ListItemText primary={"Index: " + noteNumber} />
                    <ListItemText
                      classes={{ primary: classes.listText }}
                      primary={"Note: " + userNote.text}
                    />
                    <ListItemSecondaryAction className={classes.iconButton}>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        variant="contained"
                        onClick={() => handleDeleteNoteClick(userNote.id)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <Divider className={classes.divider} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid xs={12} className={classes.paper} position="static">
          <Grid>
            <CreateNoteForm {...props} setUserNotes={setUserNotes} />
            <center>
              <Typography variant="h5">No notes to display</Typography>
            </center>
          </Grid>
        </Grid>
      );
    }
  }
}

export default NoteList;
