import { useContext, useState, useEffect } from "react";

import Modal from "../UI/Modal";
import classes from "../Cart/CartItem.module.css";
import Orderitem from "./OrderItems";

const Orders = (props) => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    fetch("https://react-http-48387-default-rtdb.firebaseio.com/orders.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let loadedData = [];

        for (const key in data) {
          if (
            data[key].userData.email ===
            JSON.parse(localStorage.getItem("token")).email
          ) {
            loadedData = [...loadedData, ...data[key].orderItems];
          }
        }

        setAllOrders(loadedData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError("Somthing Went Worng!!");
      });
  }, []);

  const DisplayMessage = ({ title }) => (
    <p
      style={{
        color: "#ff5959",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
      }}
    >
      {title}
    </p>
  );

  const OrderItemList = () => (
    <ul className={classes["cart-items"]}>
      {allOrders.map((item, idx) => (
        <Orderitem
          key={idx}
          name={item.name}
          amount={+item.amount}
          price={+item.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {isLoading && !httpError && <DisplayMessage title="Loading..." />}
      {!isLoading && !httpError && <OrderItemList />}

      {!isLoading && !httpError && allOrders.length === 0 && (
        <DisplayMessage title="No Orders Found :(" />
      )}
      {!isLoading && httpError && <DisplayMessage title={httpError} />}
    </Modal>
  );
};

export default Orders;
