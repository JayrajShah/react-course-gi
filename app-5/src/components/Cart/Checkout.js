import { useRef, useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const confirmHandler = (event) => {
    event.preventDefault();

    const payLoad = {
      userData: {
        name: nameRef.current.value,
        street: streetRef.current.value,
        postal: postalRef.current.value,
        city: cityRef.current.value,
      },
      orderItems: cartCtx.items,
    };
    setIsSubmitting(true);

    fetch("https://react-http-48387-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payLoad),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSubmitting(false);
        setDidSubmit(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        setDidSubmit(false);
      });

    nameRef.current.value = "";
    streetRef.current.value = "";
    postalRef.current.value = "";
    cityRef.current.value = "";
  };

  const FormComponent = () => (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );

  return (
    <>
      {isSubmitting && !didSubmit && <p>Submitting</p>}
      {!isSubmitting && didSubmit && <p>Order Successful!!!</p>}
      {!isSubmitting && !didSubmit && <FormComponent />}
    </>
  );
};

export default Checkout;
