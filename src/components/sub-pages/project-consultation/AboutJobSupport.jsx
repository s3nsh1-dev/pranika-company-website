import React from "react";
import { Box, Typography } from "@mui/material";
import { whyChooseJobSupportFormUs } from "../../../constants/ProjectConsultation";

export default function AboutJobSupport() {
  const renderWhyPoints = whyChooseJobSupportFormUs.map((point) => {
    return (
      <Typography component='li' key={point.id} sx={{ margin: "10px 0px" }}>
        {point.point}
      </Typography>
    );
  });
  return (
    <Box sx={{ margin: "20px 50px" }}>
      <Typography variant='h6'>
        Need Help with Your Project or Job Role?
      </Typography>
      <Box component='ul'>{renderWhyPoints}</Box>
    </Box>
  );
}
