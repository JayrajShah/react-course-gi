import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  let isFormValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) isFormValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) return;

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const inputClasses = (inputHasError) =>
    !inputHasError ? "form-control" : "form-control invalid";

  return (
    <form>
      <div className="control-group">
        <div className={inputClasses(firstNameHasError)}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={inputClasses(lastNameHasError)}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={inputClasses(emailHasError)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid} onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
