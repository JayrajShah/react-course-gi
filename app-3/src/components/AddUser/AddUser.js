import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const INITIAL_STATE = {
  name: "",
  age: "",
};
const AddUser = ({ onAddUserHandler }) => {
  const [inputData, setInputData] = useState(INITIAL_STATE);

  const onChangeHandler = (event) => {
    setInputData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      inputData.name.length === 0 ||
      inputData.age.length === 0 ||
      +inputData.age < 0
    )
      return;

    const data = {
      name: inputData.name,
      age: +inputData.age,
    };
    onAddUserHandler(data);
    setInputData(INITIAL_STATE);
  };

  return (
    <Card>
      <form className={styles.form__control}>
        <div className={styles.form__inputs}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={inputData.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.form__inputs}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={inputData.age}
            onChange={onChangeHandler}
          />
        </div>
        <Button title="Add" type="submit" onClick={onSubmitHandler} />
      </form>
    </Card>
  );
};

export default AddUser;
