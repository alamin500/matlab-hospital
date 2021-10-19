import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = (props) => {
  const { home = false } = props;
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="container">
      <div className="row g-5">
        <h1 className="service-h1">Our Services</h1>
        {services.map((service, i) =>
          home ? (
            i < 4 && <Service key={service.id} services={service}></Service>
          ) : (
            <Service key={service.id} services={service}></Service>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
