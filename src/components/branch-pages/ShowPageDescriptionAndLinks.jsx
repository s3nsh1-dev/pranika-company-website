import React from "react";
import { Box, Typography } from "@mui/material";
import TitleContactLinks from "./TitleContactLinks";

export default function ShowPageDescriptionAndLinks({ title, content }) {
  return (
    <Box sx={{ padding: " 20px 40px" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        {title}
      </Typography>
      <Typography textAlign='justify'>{content}</Typography>
      <TitleContactLinks />
    </Box>
  );
}
