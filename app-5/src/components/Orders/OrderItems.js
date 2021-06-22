import classes from "../Cart/CartItem.module.css";

const OrderItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <span className={classes.price}>
          {props.price.toFixed(2) * props.amount}
        </span>
      </div>
    </li>
  );
};

export default OrderItem;
