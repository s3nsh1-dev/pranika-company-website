import React from "react";
import { Box, Typography } from "@mui/material";
import { whyChooseJobSupportFormUs } from "../../../constants/ProjectConsultationConstants";

const bulletPointStyle = {
  margin: "10px 0px",
  fontSize: "15px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "10px 15px",
  borderRadius: "5px",
  border: "1px solid white",
};
const containerStyle = {
  margin: "20px 3%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const listTitleStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "10px 15px",
  borderRadius: "5px",
  border: "1px solid white",
  margin: "2px",
};

export default function AboutJobSupport() {
  const renderWhyPoints = whyChooseJobSupportFormUs.map((point) => {
    return (
      <Typography component='li' key={point.id} sx={bulletPointStyle}>
        <span style={{ fontWeight: "bold" }}>{point.title}</span>:{" "}
        {point.content}
      </Typography>
    );
  });
  return (
    <Box sx={containerStyle}>
      <Typography variant='h5' textAlign='center' sx={listTitleStyle}>
        Need Help with Your Project or Job Role?
      </Typography>
      <Box component='ul'>{renderWhyPoints}</Box>
    </Box>
  );
}
