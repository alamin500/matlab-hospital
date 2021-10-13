import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
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
        Already have an Accout? <Link to="/login"></Link>
        <div className="btn-regular">Google Sign In</div>
      </p>
    </div>
  );
};

export default Register;
