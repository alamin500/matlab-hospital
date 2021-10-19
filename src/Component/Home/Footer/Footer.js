import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-container text-start">
                <h5>Contact Information</h5>

                <p className="mt-4 ">
                  <small>
                    227 Marion street New York USA. Street, 4916 Pinewood Drive.
                    City, Park Ridge. State/Province abbr, IL. State/Province
                    full, Illinois. Zip Code/Postal code, 60068.
                  </small>
                </p>
                <Link className="footer-link">matlab-hospital.net</Link>
                <br />
                <Link className="footer-link">matlab-hospital@mail.com</Link>
                <div className="icons-container d-flex text-center ">
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                </div>
                <p className="mt-2">
                  <small>Colac © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <h5 className="footer-menu">
                    <strong>Doctors</strong>
                    <br />
                    <br />
                  </h5>
                  <Link className="footer-link">
                    <li className="footer-menu">Dr. Nick Sims</li>
                  </Link>
                  <hr className="line" />
                  <li className="footer-menu">Dr. Michael Linden</li>
                  <hr className="line" />
                  <li className="footer-menu">Dr. Max Turner</li>
                  <hr className="line" />
                  <li className="footer-menu">Dr. Amy Adams</li>
                  <hr className="line" />
                  <li className="footer-menu">Dr. Turner</li>
                  <hr className="line" />
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu-container">
                <ul>
                  <h5 className="footer-menu">
                    <strong>Services</strong>
                  </h5>
                  <br />
                  <Link className="footer-link">
                    <li className="footer-menu">Outpatient Surgery</li>
                  </Link>
                  <hr className="line" />
                  <li className="footer-menu">Cardiac Clinic</li>
                  <hr className="line" />
                  <li className="footer-menu">Ophthalmology Clinic</li>
                  <hr className="line" />
                  <li className="footer-menu"> Gynaecological Clinic</li>
                  <hr className="line" />
                  <li className="footer-menu"> Outpatient Rehabilitation</li>
                  <hr className="line" />
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-footer-container">
                <h5>Contact Us</h5>
                <br />
                <div className="">
                  <div className="input-group  mb-3">
                    <input
                      type="text"
                      className="p-2 form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      placeholder="Message"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <div>
                    <button type="button" className="btn btn-primary p-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
