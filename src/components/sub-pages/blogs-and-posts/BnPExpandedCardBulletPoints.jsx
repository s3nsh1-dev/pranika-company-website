import React from "react";
import { Box } from "@mui/material";
import { ClampText } from "../../common/TitleTexts";

const BnPExpandedCardBulletPoints = ({ bullet }) => {
  return (
    <Box margin={2}>
      <ClampText variant='h6' fontWeight='bold'>
        {bullet.pointsTitle}
      </ClampText>
      {bullet.points.map((point, index) => {
        return (
          <Box component='li' key={index}>
            {point}
          </Box>
        );
      })}
    </Box>
  );
};

export default BnPExpandedCardBulletPoints;
