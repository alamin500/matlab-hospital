import React from "react";
import { Link } from "react-router-dom";

import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  //   console.log(signInUsingGoogle);
  const a = () => {
    console.log("fdgfggfh");
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" />
          <br />
          <input type="submit" value="Submit" />
          <p>
            New to ema-john? <Link to="/register">Create Accout</Link>
          </p>
          <div>-------------or-----------</div>
          <button className="btn-regular" onClick={signInUsingGoogle}>
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
