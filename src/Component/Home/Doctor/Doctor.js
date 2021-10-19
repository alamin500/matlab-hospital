import React from "react";
import "./Doctor.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Doctor = ({ doctor }) => {
  const { user } = useAuth();
  const { name, img, describe, phone } = doctor;
  console.log(doctor);
  return (
    <div className="col-12 col-sm-6 doctor-flex col-lg-3">
      <Card className="doctor">
        <Card.Img variant="top" src={img} className=" doctor-img" />
        <Card.Body className="">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{describe}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{phone}</ListGroupItem>
        </ListGroup>
        {user?.email ? (
          <Link className="meet-link" to="/meet">
            <Card.Body className=" card-meet">Meet Now</Card.Body>
          </Link>
        ) : (
          <Link className="meet-link" to="/login">
            <Card.Body className="card-meet">Meet Now</Card.Body>
          </Link>
        )}
      </Card>
    </div>
  );
};

export default Doctor;
