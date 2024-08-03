import React from "react";
import { Box, Typography } from "@mui/material";

export default function ShowDataTransformationHeader({ title, content }) {
  return (
    <Box sx={{ padding: " 20px 40px 40px 40px" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
      <Typography>
        <span style={{ fontWeight: "bold" }}>Contact Us:</span>&nbsp;{" "}
        <Typography component='a' href='tel:+919151391112'>
          <i>(+91) 9151391112</i>
        </Typography>{" "}
        |{" "}
        <Typography component='a' href={`mailto:info@pranikatech.com`}>
          <i>info@pranikatech.com</i>
        </Typography>
      </Typography>
    </Box>
  );
}
