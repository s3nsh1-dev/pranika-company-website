import React from "react";
import { Box, Typography } from "@mui/material";

const whyUsPortfolioConstant = [
  {
    id: 0,
    topic: "Industry Experts",
    detail:
      "Our certified professionals bring a wealth of experience across various IT domains.",
  },
  {
    id: 1,
    topic: "Client-Centric Approach",
    detail:
      "We tailor our solutions to meet the specific needs of your business.",
  },
  {
    id: 2,
    topic: "Cost-Effective Solutions",
    detail: "Get more value with scalable and affordable IT services.",
  },
  {
    id: 3,
    topic: "Proven Track Record",
    detail:
      "Successfully delivering projects across industries, with a focus on quality and innovation.",
  },
];

const PortfolioWhyChooseUs = () => {
  const whyList = whyUsPortfolioConstant.map((why) => {
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
