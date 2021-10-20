import React from "react";
import { Link } from "react-router-dom";

import "./Service.css";

const Service = ({ services }) => {
  const { id, img, service, catagory } = services;
  return (
    <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
      <div>
        <Link to={`/book/${id}`}>
          <div className="hover-img m-0">
            <img className="card-img" src={img} alt="" />
          </div>
          <h5 className="service-h5">{service}</h5>
        </Link>
        <p>
          <small>In {catagory}</small>
        </p>
      </div>
    </div>
  );
};

export default Service;
