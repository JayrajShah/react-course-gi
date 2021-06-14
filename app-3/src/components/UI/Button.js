import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, title }) => {
  return (
    <div className={styles.form__action}>
      <button type={type || "button"} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
