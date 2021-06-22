import React from "react";

import classes from "./HeaderCartButton.module.css";

const SimpleButton = ({ onClick, title }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default SimpleButton;
