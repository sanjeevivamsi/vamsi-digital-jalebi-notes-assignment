import React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useFormStyles from "../Themes/FormStyle";
import {
  emailFormValidator,
  passwordFormValidator,
} from "../FormValidators/FormValidator";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const handleLogin = (data) => {
    props.functionCall(data.email, data.password);
  };

  const classes = useFormStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ justifyContent: "center" }} className={classes.paper}>
        <Avatar
          style={{ backgroundColor: "#4267B2" }}
          className={classes.avatar}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                id="email"
                type="email"
                label="Email Address"
                autoComplete="off"
                inputRef={register(emailFormValidator())}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                inputRef={register(passwordFormValidator())}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : null}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}
