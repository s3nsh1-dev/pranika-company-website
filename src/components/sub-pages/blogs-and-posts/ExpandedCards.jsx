import { Box, Typography } from "@mui/material";
import React from "react";
import { ClampText } from "../../common/TitleTexts";

const paperContainer = { margin: "10px", padding: "10px" };

const headingStyle = {
  fontWeight: "bold",
  textAlign: "center",
  padding: "10px",
  marginBottom: "10px",
};

export default function ExpandedCards({
  title,
  intro,
  whyLearn,
  bulletPoints,
  author,
}) {
  const renderBulletPoints = bulletPoints.map((bullet) => {
    return (
      <Box key={bullet.id} margin={2}>
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
  });
  return (
    <Box sx={paperContainer}>
      <Typography variant='h5' sx={headingStyle}>
        {title}
      </Typography>
      <Typography textAlign='justify'>{intro}</Typography>
      <Box margin={2}>
        <Typography variant='h6' fontWeight='bold'>
          {whyLearn.title}
        </Typography>
        <Typography textAlign='justify'>{whyLearn.describes}</Typography>
      </Box>
      <Box component='ul'>{renderBulletPoints}</Box>
      <Typography textAlign='end' fontSize='x-small'>
        author: <i>{author}</i>
      </Typography>
    </Box>
  );
}

/*
if its possible try ot make a data label to show the date this post where written
*/
