import { useState } from "react";
import React from "react";

const Login = () => {
  const [isLogIn, SetIsLogIn] = useState(false);
  const handleloginbutton = () => {
    SetIsLogIn(true);
  };
  return (
    <div>
      {isLogIn ? (
        <div>
          <h1>Welcome to Login Page</h1>
        </div>
      ) : (
        <div>
          <h1>Please Click On Login Button to Login </h1>
          <button onClick={handleloginbutton}>Login</button>
        </div>
      )}
    </div>
  );
};
export default Login;
