import React from "react";
import { Box, Typography } from "@mui/material";

const PortfolioAbout = () => {
  return (
    <Box>
      <Typography variant='h5'>What we offer</Typography>
      <Box component='ul'>
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
