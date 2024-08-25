import React from "react";
import { Box, Typography } from "@mui/material";
import { commitmentsDetails } from "../../constants/TrainingPageConstants";
import TrainingCommitmentDetails from "../branch-pages/TrainingCommitmentDetails";
import "../branch-pages/TrainingCommitmentDetails.css";

const contentHeadlineStyle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2.5rem",
  margin: "20px",
};

const cicleCommitmentCardsAllignmnet = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

export default function TrainingCommitments() {
  return (
    <Box>
      <Typography sx={contentHeadlineStyle}>Our Commitment</Typography>
      <Box sx={cicleCommitmentCardsAllignmnet}>
        {commitmentsDetails.map((commit, index) => {
          return (
            <Box
              className={index % 2 === 0 ? "flicker-1" : "flicker-2"}
              key={commit.id}
            >
              <TrainingCommitmentDetails commit={commit} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
