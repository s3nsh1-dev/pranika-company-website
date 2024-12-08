import { Box, Typography } from "@mui/material";
import React from "react";
import BnPExpandedCardBulletPoints from "./BnPExpandedCardBulletPoints";
import AuthorName from "./AuthorName";

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
    return <BnPExpandedCardBulletPoints key={bullet.id} bullet={bullet} />;
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
      <AuthorName author={author} />
    </Box>
  );
}
