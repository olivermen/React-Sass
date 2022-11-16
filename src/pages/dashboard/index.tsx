import React from "react";

// import stylesheets
import "./dashboard.scss";

// import components
import Header from "./header/header";
import Jumbotron from "./sections/jumbotron";
import Carousel from "./carousel/carousel_default";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import ContactForm from "./contact";

const Dashboard = () => {
  return (
    <div className="container">
      <Header></Header>
      <Jumbotron></Jumbotron>
      <Carousel></Carousel>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Dashboard;
