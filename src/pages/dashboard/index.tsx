import React from "react";

// import stylesheets
import "./dashboard.scss";

// import components
import Header from "../../components/header/header";
import Jumbotron from "../../components/sections/jumbotron";
import Carousel from "../../components/carousel/carousel_default";
import Portfolio from "../../components/portfolio";
import Pricing from "../../components/pricing";
import ContactForm from "../../components/contact";

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
