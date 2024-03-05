import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function Auth() {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div>
      LocalStoreage
      {isLoggedIn ? (
        <>
          <h1>LoggedIn</h1>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Auth;
