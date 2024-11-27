import React from "react";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioCaseStudy from "./PortfolioCaseStudy";
import PortfolioWhyChooseUs from "./PortfolioWhyChooseUs";
import PortfolioTechStack from "./PortfolioTechStack";
import PortfolioServices from "./PortfolioServices";

const Portfolio = () => {
  return (
    <>
      <PortfolioAbout />
      <PortfolioServices />
      <PortfolioWhyChooseUs />
      <PortfolioTechStack />
      <PortfolioCaseStudy />
    </>
  );
};

export default Portfolio;
