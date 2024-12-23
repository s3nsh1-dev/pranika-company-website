import React from "react";
import { Box } from "@mui/material";
import { ourTechStack } from "../../../constants/PortfolioConstants";
import {
  PrimaryHeadingText,
  SecondaryHeadingSpanText,
} from "../../common/TitleTexts";

const PortfolioTechStack = () => {
  const showStackPile = ourTechStack.map((stackPile) => {
    return (
      <Box component='li' key={stackPile.id}>
        <SecondaryHeadingSpanText>
          {stackPile.category}:{" "}
        </SecondaryHeadingSpanText>
        {stackPile.stack.join(", ")}
      </Box>
    );
  });
  return (
    <Box sx={{ margin: "20px 0px", padding: "10px" }}>
      <PrimaryHeadingText fontWeight='bold'>
        Our Technology Stack
      </PrimaryHeadingText>
      <Box component='ul'>{showStackPile}</Box>
    </Box>
  );
};

export default PortfolioTechStack;
