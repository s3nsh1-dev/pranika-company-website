import React from "react";
import { Box, Typography } from "@mui/material";
import "./TrainingCommitmentDetails.css";

export default function TrainingCommitmentDetails({ classValue, commit }) {
  const circleBoxWithTexts = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: `2px solid ${commit.color}`,
    margin: "10px 10px",
    borderRadius: "50px",
    padding: "60px",
    maxWidth: 400,
    maxHeight: 400,
  };
  return (
    <Box sx={circleBoxWithTexts}>
      <Typography
        textAlign='justify'
        sx={{
          wordBreak: "break-word",
          textAlign: "justify",
          fontSize: ".9rem",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{commit.title}: </span>
        {commit.details}
      </Typography>
    </Box>
  );
}
