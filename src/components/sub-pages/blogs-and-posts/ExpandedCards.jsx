import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const paperContainer = { margin: "10px", padding: "20px", maxWidth: 600 };
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
        <Typography variant='h6' fontWeight='bold'>
          {bullet.pointsTitle}
        </Typography>
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
    <Paper sx={paperContainer} elevation={6}>
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
      <Typography textAlign='end' fontSize='small'>
        author: <i>{author}</i>
      </Typography>
    </Paper>
  );
}

/*
if its possible try ot make a data label to show the date this post where written
*/
