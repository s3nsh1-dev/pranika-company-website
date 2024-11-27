import React from "react";
import { Box, Typography } from "@mui/material";
import { ourTechStack } from "../../../constants/PortfolioConstants";

const PortfolioTechStack = () => {
  const showStackPile = ourTechStack.map((stackPile) => {
    return (
      <Typography key={stackPile.id} component='li'>
        {stackPile.category}: {stackPile.stack.join(", ")}
      </Typography>
    );
  });
  return (
    <Box>
      <Typography>Our Technology Stack</Typography>
      <Box component='ul'>{showStackPile}</Box>
    </Box>
  );
};

export default PortfolioTechStack;
