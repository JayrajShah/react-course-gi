import React from "react";
import styles from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={styles.card__container}>{children}</div>;
};

export default Card;
