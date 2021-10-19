import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
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
      setError("Please enter 6 password.");
      return;
    } else {
      createNewUser(email, password);
    }
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
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
  return (
    <div className="register-form">
      <div>
        <h4 className="log-h4">Create an account</h4>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            onBlur={handleNameChange}
            className="p-2 form-control"
            placeholder="Your Name"
            aria-label="text"
            aria-describedby="basic-addon1"
            required
          />
          <br />

          <input
            type="email"
            onBlur={handleEmailChange}
            className="p-2 form-control"
            placeholder="Your Email"
            aria-label="text"
            aria-describedby="basic-addon1"
            required
          />

          <br />
          <input
            type="password"
            onBlur={handlePasswordChange}
            className="p-2 form-control "
            placeholder="Password"
            aria-label="text"
            aria-describedby="basic-addon1"
            required
          />

          <p>{error}</p>
          <Button
            type="submit"
            value="Submit"
            className="btn w-100 mt-1 btn-primary"
          >
            Register
          </Button>
        </form>
        <br />
        <br />
        <p>
          Already have an Accout?{" "}
          <Link className="google-btn" to="/Login">
            <Button
              type="submit"
              value="Submit"
              className="btn w-100 btn-danger"
            >
              Log In
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
