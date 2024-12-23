import { useState } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioCaseStudy from "./PortfolioCaseStudy";
import PortfolioWhyChooseUs from "./PortfolioWhyChooseUs";
import PortfolioTechStack from "./PortfolioTechStack";
import PortfolioServices from "./PortfolioServices";
import PrimaryFooter from "../PrimaryFooter";
import SecondryNavbar from "../SecondryNavbar";

const SwitchingTabButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  width: "200px",
  margin: "5px",
  fontSize: "1em",
}));

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
      <SecondryNavbar />
      <Box
        sx={{
          padding: "20px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SwitchingTabButton
          variant={activeButton.about ? "outlined" : "text"}
          color={activeButton.about ? "success" : "error"}
          onClick={() => handleActiveTab("about")}
        >
          Aim
        </SwitchingTabButton>
        <SwitchingTabButton
          variant={activeButton.services ? "outlined" : "text"}
          color={activeButton.services ? "success" : "error"}
          onClick={() => handleActiveTab("services")}
        >
          Services
        </SwitchingTabButton>
        <SwitchingTabButton
          variant={activeButton.case ? "outlined" : "text"}
          color={activeButton.case ? "success" : "error"}
          onClick={() => handleActiveTab("case")}
        >
          Case Study
        </SwitchingTabButton>
      </Box>
      {activeTab === "about" && (
        <Box sx={{ margin: "2%" }}>
          <PortfolioAbout />
          <PortfolioWhyChooseUs />
          <PortfolioTechStack />
        </Box>
      )}
      {activeTab === "services" && <PortfolioServices />}
      {activeTab === "case" && <PortfolioCaseStudy />}
      <PrimaryFooter />
    </>
  );
};

export default Portfolio;
