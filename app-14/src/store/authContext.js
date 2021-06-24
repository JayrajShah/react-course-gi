import { createContext, useState, useEffect } from "react";

let logoutTimer;
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expTime) => {
  const currTIme = new Date().getTime();
  const newExpTime = new Date(expTime).getTime();

  return newExpTime - currTIme;
};

const isTokenValid = () => {
  const inititalToken = localStorage.getItem("Authtoken");
  const storedExpDate = localStorage.getItem("AuthExpTime");

  const remainingTime = calculateRemainingTime(storedExpDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("Authtoken");
    localStorage.removeItem("AuthExpTime");
    return null;
  }

  return {
    token: inititalToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = isTokenValid();
  let inititalToken;
  if (tokenData) {
    inititalToken = tokenData.token;
  }

  const [token, setToken] = useState(inititalToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("Authtoken");
    localStorage.removeItem("AuthExpTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expTime) => {
    setToken(token);
    localStorage.setItem("Authtoken", token);
    localStorage.setItem("AuthExpTime", expTime);

    const remTime = calculateRemainingTime(expTime);

    logoutTimer = setTimeout(logoutHandler, remTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
