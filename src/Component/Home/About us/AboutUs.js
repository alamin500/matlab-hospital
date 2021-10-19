import React from "react";
import { useSpring, animated } from "react-spring";
import "./AboutUs.css";
import doctor1 from "../../../images/Doctor/doctor4.jfif";

const AboutUs = () => {
  const roll = useSpring({ number: 18, from: { number: 0 } });
  const rollTwo = useSpring({ number: 2430, from: { number: 0 } });
  const rollThree = useSpring({ number: 28, from: { number: 0 } });
  const rollFour = useSpring({ number: 48, from: { number: 0 } });
  const rollFive = useSpring({ number: 7856, from: { number: 0 } });
  return (
    <section>
      <div className="about-image">
        <p>About us</p>
        <h5>Chief Doctor Says</h5>
        <div className="about-text d-flex justify-content-between">
          <img src={doctor1} alt="" />
          <div>
            <h5>Dr. Nick Sims</h5>
            <p>Chief Doctor</p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              iure provident quo vitae debitis? Nostrum ullam debitis tempore
              fuga inventore ab, quis hic, non, porro nulla dignissimos eius?
              Autem, sit at? Saepe maxime nisi ea commodi? Illo labore quidem
              natus nam ut optio voluptate nulla deserunt.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex about-section justify-content-between">
        <div className="overflow-hidden w-25">
          <animated.span style={{ fontSize: "2em" }}>
            {roll.number}
          </animated.span>
          <h6>Doctors</h6>
        </div>
        <div className="overflow-hidden w-25">
          <animated.span style={{ fontSize: "2em" }}>
            {rollTwo.number}
          </animated.span>
          <h6>Patients a year</h6>
        </div>
        <div className="overflow-hidden w-25">
          <animated.span style={{ fontSize: "2em" }}>
            {rollThree.number}
          </animated.span>
          <h6>People working</h6>
        </div>
        <div className="overflow-hidden w-25">
          <animated.span style={{ fontSize: "2em" }}>
            {rollFour.number}
          </animated.span>
          <h6>Years of expericence</h6>
        </div>
        <div className="overflow-hidden w-25">
          <animated.span style={{ fontSize: "2em" }}>
            {rollFive.number}
          </animated.span>
          <h6>Happy Smiles</h6>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
