import React from "react";
import { Box, Typography } from "@mui/material";

const techStackPortfolioConstant = [
  { id: 0, category: "Cloud", stack: ["Azure", "AWS", "Google Cloud"] },
  {
    id: 1,
    category: "Data Tools",
    stack: ["PowerBI", "Azure Data Factory", "SSIS", "Data Bricks"],
  },
  {
    id: 2,
    category: "Data Science",
    stack: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLM and LIM Model",
      "Gen AI",
      "etc.",
    ],
  },
  {
    id: 3,
    category: "DevOps Tools",
    stack: ["Jenkins", "Kubernetes", "Docker", "Terraform"],
  },
  {
    id: 4,
    category: "Languages",
    stack: ["ReactJS", "Java", "Python", "JavaScript", "TypeScript"],
  },
];

const PortfolioTechStack = () => {
  const showStackPile = techStackPortfolioConstant.map((stackPile) => {
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
