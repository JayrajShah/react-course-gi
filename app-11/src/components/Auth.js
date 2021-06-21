import { useState } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const INT_STATE = {
  email: "",
  password: "",
};

const Auth = () => {
  const [credentials, setCredentials] = useState(INT_STATE);
  const dispatch = useDispatch();

  const onLoginHandler = (event) => {
    event.preventDefault();

    if (
      !credentials.email.trim().includes("@") ||
      !(credentials.password.trim().length >= 6)
    ) {
      return;
    }

    dispatch(authActions.login());
    setCredentials(INT_STATE);
  };

  const inputChangeHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={credentials.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={credentials.password}
              onChange={inputChangeHandler}
            />
          </div>
          <button type="submit" onClick={onLoginHandler}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
