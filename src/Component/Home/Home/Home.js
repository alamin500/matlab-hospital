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
      <Services home={true}></Services>
      <Doctors home={true}></Doctors>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
