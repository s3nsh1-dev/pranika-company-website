import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { digitalMarketingPoints } from "../../constants/DigitalMarketingConstants";
// import DigitalMarketingModal from "./DigitalMarketingModal";

export default function AboutDigitalMarketing() {
  const renderMarketingPoints = digitalMarketingPoints.map((point) => {
    return (
      <Paper
        key={point.id}
        sx={{
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
        }}
      >
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
      </Paper>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {renderMarketingPoints}
    </Box>
  );
}
