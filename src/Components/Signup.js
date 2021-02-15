import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useFormStyles from "../Themes/FormStyle";
import { useForm } from "react-hook-form";
import {
  passwordFormValidator,
  emailFormValidator,
  confirmPasswordValidator,
} from "../FormValidators/FormValidator";
export default function Signup(props) {
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onChange",
  });
  const handleSignupSubmit = async (data) => {
    await props.functionCall(data.email, data.password);
    props.history.push("/notes");
  };
  const classes = useFormStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          style={{ backgroundColor: "#4267B2" }}
          className={classes.avatar}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleSignupSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="confirmPassword"
                label="confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="off"
                inputRef={register(confirmPasswordValidator(getValues))}
                error={errors.confirmPassword ? true : false}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : null
                }
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
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
