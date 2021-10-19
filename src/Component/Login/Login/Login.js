import React, { useState } from "react";

import "./Login.css";

import useFirebase from "../../../hooks/useFirebase";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

const Login = ({ show, setShow }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  // const handleShow = () => setShow(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("password 6 ta hote hobe");
      return;
    } else {
      processLogin(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const { googleSignIn } = useFirebase();
  return (
    <div className="login-form">
      <div>
        <h4 className="log-h4">Login</h4>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            onBlur={handleEmailChange}
            className="p-2 form-control w-100"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <br />
          <input
            type="Password"
            onBlur={handlePasswordChange}
            className="p-2 form-control w-100"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />

          <br />
          <Button
            type="submit"
            value="Submit"
            className="btn w-100 btn-primary"
          >
            Log In
          </Button>
          <br />
          <br />
          <button className="btn w-100 btn-success" onClick={googleSignIn}>
            Google Sign In
          </button>
          <br />
          <br />
          <br />
          <p>
            Don’t have an account?{" "}
            <Link className="google-btn" to="/register">
              <button className="btn w-100 btn-danger">Register</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
