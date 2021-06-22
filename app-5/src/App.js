import React, { useState, useEffect } from "react";
import AuthLanding from "./components/Auth/AuthLanding";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Orders from "./components/Orders/Orders";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [ordersIsShown, setOrdersIsShown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
  }, []);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showOrdersHandler = () => {
    setOrdersIsShown(true);
  };

  const hideOrdersHandler = () => {
    setOrdersIsShown(false);
  };

  const loginHandler = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {ordersIsShown && <Orders onClose={hideOrdersHandler} />}
      <Header
        onShowCart={showCartHandler}
        onShowOrders={showOrdersHandler}
        isAuthenticated={isAuthenticated}
        onLogout={logoutHandler}
      />
      <main>
        {isAuthenticated ? <Meals /> : <AuthLanding onLogin={loginHandler} />}
      </main>
    </CartProvider>
  );
};

export default App;
