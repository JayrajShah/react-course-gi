import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ShowUser from "./components/DisplayUser/ShowUser";

const APP_STYLES = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
};

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  const addUserHandler = (userData) => {
    setAllUsers((prevData) => [userData, ...prevData]);
  };
  return (
    <div style={APP_STYLES}>
      <AddUser onAddUserHandler={addUserHandler} />
      <ShowUser userData={allUsers} />
    </div>
  );
};

export default App;
