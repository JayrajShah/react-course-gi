import React from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import SimpleButton from "./SimpleButton.js";

const Header = ({ onShowCart, onShowOrders, isAuthenticated, onLogout }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div style={{ display: "flex" }}>
          {isAuthenticated && <HeaderCartButton onClick={onShowCart} />}
          {isAuthenticated && (
            <SimpleButton title="Your Orders" onClick={onShowOrders} />
          )}
          {isAuthenticated && (
            <SimpleButton title="Logout" onClick={onLogout} />
          )}
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
