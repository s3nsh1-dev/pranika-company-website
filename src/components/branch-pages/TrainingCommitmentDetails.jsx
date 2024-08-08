import React from "react";
import { ListItem, Typography } from "@mui/material";

export default function TrainingCommitmentDetails({ commit }) {
  return (
    <ListItem>
      <Typography textAlign='justify'>
        <span style={{ fontWeight: "bold" }}>{commit.title}: </span>
        {commit.details}
      </Typography>
    </ListItem>
  );
}
