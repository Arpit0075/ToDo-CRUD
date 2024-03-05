import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("auth") ? true : false;
  });

  let token = localStorage.getItem("auth");

  useEffect(() => {
    console.log("useeffect called");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const login = () => {
    localStorage.setItem("auth", "token");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
