import React from "react";
import { Box, Typography } from "@mui/material";
import "./TrainingCommitmentDetails.css";

export default function TrainingCommitmentDetails({ classValue, commit }) {
  const circleBoxWithTexts = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: `2px solid ${commit.color}`,
    margin: "2px 10px",
    borderRadius: "50%",
    padding: "60px",
    width: 400,
    height: 400,
  };
  return (
    <Box sx={circleBoxWithTexts}>
      <Typography
        textAlign='justify'
        sx={{ wordBreak: "break-word", textAlign: "justify" }}
      >
        <span style={{ fontWeight: "bold" }}>{commit.title}: </span>
        {commit.details}
      </Typography>
    </Box>
  );
}
