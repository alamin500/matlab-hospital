import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  console.log(user);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-text">
          <Link to="/home">Matlab Hospital</Link>
          <Nav className="me-auto nav-text">
            <Link to="/service">Service</Link>

            <Link to="/doctor">Doctor</Link>
            <Link to="/about">About us</Link>

            {!user?.email && <Link to="/login">Login</Link>}
            <span className="displayname">{user.displayName}</span>
            {user?.email && (
              <button className="logout-btn" onClick={logOut}>
                {" "}
                Log Out
              </button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
