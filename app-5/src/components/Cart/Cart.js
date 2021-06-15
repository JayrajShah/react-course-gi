import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => (
      <ul className={classes["cart-items"]}>
        <li>{item.name}</li>
      </ul>
    )
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>34.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
