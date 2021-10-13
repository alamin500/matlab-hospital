import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form action="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" />
          <br />
          <input type="submit" value="Submit" />
          <p>
            New to ema-john? <Link to="/register">Create Accout</Link>
          </p>
          <div>-------------or-----------</div>
          <button className="btn-regular">Google Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
