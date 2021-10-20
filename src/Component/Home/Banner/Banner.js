import { Button } from "react-bootstrap";
import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="about-image d-flex align-items-center justify-content-center">
      <div>
        <div>
          <img src="" alt="" />
          <h6>Entrust your health our doctors</h6>
          <h1 className="p-2">The Hospital of the Future, Today</h1>
          <Link to="/service">
            <Button variant="outline-light">Appoinment</Button>{" "}
          </Link>
          <Link to="/doctor">
            <Button variant="outline-light">Meet Doctor</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
