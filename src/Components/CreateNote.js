import { Grid, Button, TextField, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import useFormStyles from "../Themes/createNoteStyle";
import * as firebaseCalls from "../services/firebase";

function CreateNote(props) {
  const [inputText, setInputText] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const handleInputChange = (e) => {
    if (error.isError && e.target.value !== "") {
      setError({ isError: false, message: "" });
    }
    setInputText(e.target.value);
  };

  const handleCreateNoteSubmit = async (e) => {
    e.preventDefault();
    if (inputText === "") {
      setError({ isError: true, message: "This field is required" });
      return;
    } else {
      setLoading(true);
      let newNoteData = {
        text: inputText,
        userId: props.loggedinUser.id,
      };
      const noteId = await firebaseCalls.addNote(newNoteData);
      props.setUserNotes((prevState) => {
        const newState = [...prevState, { ...newNoteData, id: noteId }];
        return newState;
      });
      setInputText("");
      setLoading(false);
    }
  };

  const classes = useFormStyles();
  return (
    <form className={classes.form} onSubmit={handleCreateNoteSubmit}>
      <Grid
        xs={12}
        justify="space-between"
        direction="row"
        alignItems="center"
        container
      >
        <Grid className={classes.input} item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id="Note"
            multiline
            type="text"
            rows={3}
            rowsMax={5}
            label="Enter Your Note"
            name="text"
            onChange={handleInputChange}
            autoComplete="off"
            value={inputText}
            error={error.isError}
            helperText={error.isError ? error.message : null}
          />
        </Grid>
        <Grid xs={12} className={classes.buttonWrapper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.submit}
          >
            <CircularProgress
              color="primary"
              size="22px"
              className={classes.loading}
              style={loading ? { display: "block" } : { display: "none" }}
            />
            save
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disabled={loading}
            className={classes.submit}
            onClick={() => setInputText("")}
          >
            clear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreateNote;
