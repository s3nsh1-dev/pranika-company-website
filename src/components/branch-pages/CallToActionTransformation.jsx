import React from "react";
import { Box, Typography } from "@mui/material";

export default function CallToActionTransformation() {
  return (
    <Box sx={{ padding: " 20px 40px 40px 40px" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        Call to Action
      </Typography>
      <Typography>
        Ready to unlock the full potential of your data? Contact us today for a
        free consultation and discover how we can transform your data into a
        strategic asset
      </Typography>
      <Typography fontWeight='bold'>
        Follow us on our Social Media Channel to stay UpToDate
      </Typography>
    </Box>
  );
}
