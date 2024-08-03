import React from "react";
import { Box, Typography } from "@mui/material";
import TitleContactLinks from "./TitleContactLinks";

export default function ShowConsultancyHeader() {
  return (
    <Box textAlign='justify' sx={{ padding: "20px 5% 0px 5%" }}>
      <Typography
        fontWeight='bold'
        sx={{ fontSize: { md: "1.3rem", xs: "1.1rem" } }}
      >
        Why Choose Our Consulting Services?
      </Typography>
      In today's fast-paced and technology-driven world, businesses need more
      than just basic IT support—they need strategic, cutting-edge solutions
      that drive growth, efficiency, and innovation. At Pranika Technologies and
      Consulting Pvt. Ltd., we specialize in delivering top-tier IT and strategy
      consulting services designed to help you harness the full potential of
      modern technologies and achieve your business goals.
      <TitleContactLinks />
    </Box>
  );
}
