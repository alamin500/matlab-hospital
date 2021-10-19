import React from "react";
import "./Doctor.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const { name, img, describe, phone } = doctor;
  console.log(doctor);
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <Card className="doctor">
        <Card.Img variant="top" src={img} className=" doctor-img" />
        <Card.Body className="p-2">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{describe}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{phone}</ListGroupItem>
        </ListGroup>
        <Link className="meet-link" to="/meet">
          <Card.Body className="p-2 card-meet">Meet Now</Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Doctor;
