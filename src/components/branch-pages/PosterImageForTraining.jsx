import React from "react";
import { Box } from "@mui/material";

export default function PosterImageForTraining({ image }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <Box
        component='img'
        src={image}
        sx={{ maxWidth: "55vw", borderRadius: "10px" }}
      />
    </Box>
  );
}
