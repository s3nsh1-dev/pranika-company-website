import { useState } from "react";
import { Box, Button } from "@mui/material";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioCaseStudy from "./PortfolioCaseStudy";
import PortfolioWhyChooseUs from "./PortfolioWhyChooseUs";
import PortfolioTechStack from "./PortfolioTechStack";
import PortfolioServices from "./PortfolioServices";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");
  const handleActiveTab = (newTab) => {
    setActiveTab(newTab);
  };
  return (
    <>
      <Box>
        <Button onClick={() => handleActiveTab("about")}>Aim</Button>
        <Button onClick={() => handleActiveTab("services")}>Services</Button>
        <Button onClick={() => handleActiveTab("case")}>Case Study</Button>
      </Box>
      {activeTab === "about" && (
        <Box>
          <PortfolioAbout />
          <PortfolioWhyChooseUs />
          <PortfolioTechStack />
        </Box>
      )}
      {activeTab === "services" && <PortfolioServices />}
      {activeTab === "case" && <PortfolioCaseStudy />}
    </>
  );
};

export default Portfolio;
