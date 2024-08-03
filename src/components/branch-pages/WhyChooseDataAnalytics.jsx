import React from "react";
import { Box, Typography } from "@mui/material";
import TitleContactLinks from "./TitleContactLinks";

export default function WhyChooseDataAnalytics() {
  return (
    <Box sx={{ padding: "20px 3%" }}>
      <Typography fontWeight='bold' fontSize={"1.5rem"}>
        Transform Your Data into a Powerful Business Asset
      </Typography>
      <Typography textAlign='justify'>
        At Pranika Technologies and Consulting Pvt. Ltd., we specialize in
        delivering tailored data analytics solutions that empower businesses to
        unlock the full potential of their data. Partner with us to transform
        your data into a powerful asset that fuels your business growth. Explore
        our success stories, discover how we’ve helped other businesses, and see
        what we can do for you. Contact us today for a consultation and take the
        first step towards smarter, data-driven decision-making.
      </Typography>
      <TitleContactLinks />
    </Box>
  );
}
