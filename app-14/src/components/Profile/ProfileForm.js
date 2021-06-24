import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordRef = useRef();
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAR1omBWHGD6vLs5Tt9U4H_24t6uyfap60",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: AuthCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        history.replace("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={passwordRef}
          minLength="6"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
