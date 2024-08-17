import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BulletCardInfo = styled(Box)({
  borderRadius: "20px",
  boxShadow: "2px 2px 5px 2px grey",
  margin: "10px",
  padding: "20px",
  height: "100%",
  "&:hover": {
    color: "#070066",
    boxShadow: "2px 2px 5px 2px #070066",
    borderRadius: "25px",
  },
});

export default function DigitalMarketingBulletCard({ point }) {
  return (
    <BulletCardInfo>
      <Typography fontWeight='bold' variant='h6'>
        {point.title}
      </Typography>
      <Box component='ul'>
        {point.content.map((bulletPoints, index) => {
          return (
            <Typography component='li' key={index}>
              {bulletPoints}
            </Typography>
          );
        })}
      </Box>
    </BulletCardInfo>
  );
}
