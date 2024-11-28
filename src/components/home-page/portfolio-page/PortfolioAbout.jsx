import React from "react";
import { Box, Typography } from "@mui/material";
import { PageTitleText } from "../../common/TitleTexts";

const PortfolioAbout = () => {
  return (
    <Box>
      <PageTitleText>What we offer</PageTitleText>
      <Box component='ul' sx={{ textAlign: "justify", padding: "20px" }}>
        <Typography component='li'>
          We specialize in delivering comprehensive IT solutions that drive
          efficiency, innovation, and growth for businesses of all sizes.
        </Typography>
        <Typography component='li'>
          With a team of certified experts and a passion for cutting-edge
          technology, we help our clients transform their digital landscape,
          ensuring seamless operations and measurable results.
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioAbout;
