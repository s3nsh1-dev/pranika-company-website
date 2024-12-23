import React from "react";
import { Box, Typography } from "@mui/material";

export default function DigitalMarketingFooter({ title, text, subText }) {
  return (
    <Box sx={{ padding: " 20px 40px" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        {title}
      </Typography>
      <Typography textAlign='justify'>{text}</Typography>
      <Typography fontWeight='bold'>{subText}</Typography>
    </Box>
  );
}
