import React from "react";
import Hero from "../components/Hero";
import CarList from "../components/CarList";
import CarDetail from "../components/CarDetail";
import AboutUs from "../components/About";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <CarList /> */}
      <CarDetail />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
