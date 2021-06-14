import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUserHandler }) => {
  const nameInput = useRef();
  const ageInput = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const age = ageInput.current.value;

    if (name.length === 0 || age.length === 0 || +age < 0) return;

    const data = {
      name,
      age,
    };
    onAddUserHandler(data);
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  return (
    <Card>
      <form className={styles.form__control}>
        <div className={styles.form__inputs}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInput} />
        </div>
        <div className={styles.form__inputs}>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInput} />
        </div>
        <Button title="Add" type="submit" onClick={onSubmitHandler} />
      </form>
    </Card>
  );
};

export default AddUser;
