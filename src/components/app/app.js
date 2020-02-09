import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "../header";
import ContactInformation from "../contact-information";
import Main from "../main";
import OurProduction from "../our-production";
import DeliveryInformation from "../delivery-information";
import Partners from "../partners";
import Info from "../info";
import Footer from "../footer";

import "./app.scss";

const App = () => {
  return (
    <div>
      <ContactInformation />
      <Header />
      <Main />
      <OurProduction />
      <DeliveryInformation />
      <Partners />
      <Info />
      <Footer />
    </div>
  );
};

// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;

export default App;
