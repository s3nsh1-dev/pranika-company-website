import React from "react";
import { Box, Typography } from "@mui/material";

export default function ShowDataTransformationHeader({ title, content }) {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{content}</Typography>
    </Box>
  );
}
