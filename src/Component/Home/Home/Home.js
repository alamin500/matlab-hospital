import React from "react";

import AboutUs from "../About us/AboutUs";
import Banner from "../Banner/Banner";

import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Doctors home={true}></Doctors>
      <Services home={true}></Services>

      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
