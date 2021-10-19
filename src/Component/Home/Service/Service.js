import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Service.css";

const Service = ({ services }) => {
  const { user } = useAuth();
  const { img, service, catagory } = services;
  return (
    <div className="col-12 col-sm-6 col-lg-3 service-card">
      {user?.email ? (
        <Link to="/buy">
          <img className="card-img" src={img} alt="" />
          <h5 className="service-h5">{service}</h5>
        </Link>
      ) : (
        <Link to="/login">
          <img className="card-img" src={img} alt="" />
          <h5 className="service-h5">{service}</h5>
        </Link>
      )}
      <p>
        <small>In {catagory}</small>
      </p>
    </div>
  );
};

export default Service;
