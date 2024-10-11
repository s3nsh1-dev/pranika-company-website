import React from "react";
import { Box, Typography } from "@mui/material";
import { whyChooseJobSupportFormUs } from "../../../constants/ProjectConsultationConstants";

export default function AboutJobSupport() {
  const renderWhyPoints = whyChooseJobSupportFormUs.map((point) => {
    return (
      <Typography
        component='li'
        key={point.id}
        sx={{
          margin: "10px 0px",
          fontSize: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "1px solid white",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{point.title}</span>:{" "}
        {point.content}
      </Typography>
    );
  });
  return (
    <Box
      sx={{
        margin: "20px 3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant='h5'
        textAlign='center'
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "1px solid white",
          margin: "2px",
        }}
      >
        Need Help with Your Project or Job Role?
      </Typography>
      <Typography>
        Our expert job support services from India are here to help you navigate
        these challenges and achieve your goals.
      </Typography>
      <Box component='ul'>{renderWhyPoints}</Box>
    </Box>
  );
}
