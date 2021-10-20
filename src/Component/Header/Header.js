import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" className="d-block d-md-none">
          Matlab Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Navbar className="topnav" bg="dark" variant="dark">
            <Container className="nav-text">
              <Link className="hospital" to="/home">
                Matlab Hospital
              </Link>
              <Nav className=" nav-text">
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
