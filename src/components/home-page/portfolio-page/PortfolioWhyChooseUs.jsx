import React from "react";
import { Box, Typography } from "@mui/material";
import { whyChooseUs } from "../../../constants/PortfolioConstants";

const PortfolioWhyChooseUs = () => {
  const whyList = whyChooseUs.map((why) => {
    return (
      <Box key={why.id}>
        <Typography>
          {why.topic}: {why.detail}
        </Typography>
      </Box>
    );
  });
  return <>{whyList}</>;
};

export default PortfolioWhyChooseUs;
