import React from "react";
import { Box } from "@mui/material";
import { offeredServices } from "../../../constants/PortfolioConstants";
import ServiceRightAlign from "./ServiceRightAlign";
import { PageTitleText } from "../../common/TitleTexts";

const PortfolioServices = () => {
  const renderServiceList = offeredServices.map((list, index) => {
    return <ServiceRightAlign key={list.id} service={list} />;
  });
  return (
    <>
      <PageTitleText>Our Best Services</PageTitleText>
      <Box
        className='service-container'
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "1%",
        }}
      >
        {renderServiceList}
      </Box>
    </>
  );
};

export default PortfolioServices;
