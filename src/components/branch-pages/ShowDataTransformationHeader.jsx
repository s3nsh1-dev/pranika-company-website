import React from "react";
import { Box, Typography } from "@mui/material";
import TitleContactLinks from "./TitleContactLinks";

export default function ShowDataTransformationHeader({ title, content }) {
  return (
    <Box sx={{ padding: " 20px 40px 40px 40px" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
      <TitleContactLinks />
    </Box>
  );
}
