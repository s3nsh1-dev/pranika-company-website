import { useState } from "react";
import { Box, Button } from "@mui/material";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioCaseStudy from "./PortfolioCaseStudy";
import PortfolioWhyChooseUs from "./PortfolioWhyChooseUs";
import PortfolioTechStack from "./PortfolioTechStack";
import PortfolioServices from "./PortfolioServices";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [activeButton, setActiveButton] = useState({
    about: true,
    services: false,
    case: false,
  });

  const handleActiveTab = (newTab) => {
    setActiveTab(newTab);
    switch (newTab) {
      case "about":
        setActiveButton({ about: true, services: false, case: false });
        break;
      case "services":
        setActiveButton({ about: false, services: true, case: false });
        break;
      case "case":
        setActiveButton({ about: false, services: false, case: true });
        break;
      default:
        setActiveButton({ about: true, services: false, case: false });
        break;
    }
  };
  return (
    <>
      <Box>
        <Button
          variant={activeButton.about ? "outlined" : "text"}
          onClick={() => handleActiveTab("about")}
        >
          Aim
        </Button>
        <Button
          variant={activeButton.services ? "outlined" : "text"}
          onClick={() => handleActiveTab("services")}
        >
          Services
        </Button>
        <Button
          variant={activeButton.case ? "outlined" : "text"}
          onClick={() => handleActiveTab("case")}
        >
          Case Study
        </Button>
      </Box>
      {activeTab === "about" && (
        <>
          <PortfolioAbout />
          <PortfolioWhyChooseUs />
          <PortfolioTechStack />
        </>
      )}
      {activeTab === "services" && <PortfolioServices />}
      {activeTab === "case" && <PortfolioCaseStudy />}
    </>
  );
};

export default Portfolio;
