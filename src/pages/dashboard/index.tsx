import React from "react";

// import stylesheets
import "./dashboard.scss";

// import components
import Header from "./header/header";
import Jumbotron from "./jumbotron/jumbotron";
import Carousel from "./carousel/carousel_default";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import ContactForm from "./contact";

// import store
import useStore from "../../useStore";

const Dashboard = () => {
  const { name, update } = useStore();
  return (
    <div className="container">
      <Header name={name} />
      <Jumbotron />
      <Carousel />
      <Portfolio />
      <Pricing />
      <ContactForm></ContactForm>
    </div>
  );
};

export default Dashboard;
