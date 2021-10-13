import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <div>
        <h2>Register: Create Accout</h2>
        <form action="">
          <input type="email" name="" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Re-enter Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an Accout?{" "}
          <Link to="/Login">
            <div className="btn-regular">Google Sign In</div>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
