import React from "react";
import { Box, Typography } from "@mui/material";

export default function ShowRecruitmentIntro() {
  return (
    <Box textAlign='justify' sx={{ padding: "20px 5% 0px 5%" }}>
      <Typography
        fontWeight='bold'
        sx={{ fontSize: { md: "1.3rem", xs: "1.1rem" } }}
      >
        Elevate Your Hiring Process with Our Expert Recruitment Solutions
      </Typography>
      <Typography>
        In today’s competitive job market, finding and hiring top talent is
        crucial to your organization's success. At Pranika Technologies and
        Consulting Pvt. Ltd., we specialize in providing comprehensive
        recruitment solutions that go beyond traditional hiring practices.
        Whether you need to outsource your recruitment process or seek
        high-caliber candidates, our expert team is here to transform your
        hiring strategy and drive exceptional results.
      </Typography>
    </Box>
  );
}
