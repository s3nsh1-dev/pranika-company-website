import React from "react";
import { Box, Typography } from "@mui/material";

export default function TitleContactLinks() {
  return (
    <>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Contact Us: </span>
        <Box component='a' href={`mailto:info@pranikatech.com`}>
          <i>info@pranikatech.com</i>
        </Box>
      </Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Call Us: </span>
        <Box component='a' href={`tel:+919151391112`}>
          <i>(+91) 9151391112</i>
        </Box>
      </Typography>
    </>
  );
}
