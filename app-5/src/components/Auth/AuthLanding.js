import React from "react";
import useInput from "../hooks/useInput";
import Card from "../UI/Card";
import { validateEmail, validatePassword } from "../utils/validations";
import classes from "./AuthLanding.module.css";

const AuthLanding = ({ onLogin }) => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswrod,
  } = useInput(validatePassword);

  let isFormValid = false;
  if (passwordIsValid && emailIsValid) isFormValid = true;

  const onClickHandler = (event) => {
    event.preventDefault();
    //Final Payload
    if (!passwordIsValid && !emailIsValid) return;

    const data = {
      email: enteredEmail,
      isAuthenticated: true,
    };
    onLogin(data);

    resetEmail();
    resetPasswrod();
  };
  return (
    <section className={classes.login_form}>
      <Card>
        <form className={classes.form}>
          <div
            className={`${classes.control} ${
              emailHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="emailemail"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
          </div>

          <div className={classes.actions}>
            <button
              className={classes.submit}
              onClick={onClickHandler}
              disabled={!isFormValid}
            >
              Login
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default AuthLanding;
