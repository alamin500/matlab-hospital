import { Button } from "react-bootstrap";
import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="about-image">
      <img src="" alt="" />
      <p>Entrust your health our doctors</p>
      <h3>The Hospital of the Future, Today</h3>
      <Button variant="outline-light">Appoinment</Button>{" "}
      <Button variant="outline-light">Meet Doctor</Button>{" "}
    </div>
  );
};

export default Banner;
