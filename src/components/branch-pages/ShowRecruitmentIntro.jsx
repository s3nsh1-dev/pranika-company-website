import React from "react";
import { Box, Typography } from "@mui/material";

export default function ShowRecruitmentIntro() {
  return (
    <>
      <Box textAlign='justify' sx={{ padding: "20px 5% 0px 5%" }}>
        <Typography
          fontWeight='bold'
          sx={{ fontSize: { md: "1.3rem", xs: "1.1rem" } }}
        >
          Ready to Transform Your Hiring Process?
        </Typography>
        <Typography textAlign='justify'>
          In today’s competitive job market, finding and hiring top talent is
          crucial to your organization's success. At Pranika Technologies and
          Consulting Pvt. Ltd., we specialize in providing comprehensive
          recruitment solutions that go beyond traditional hiring practices.
          Whether you need to outsource your recruitment process or seek
          high-caliber candidates, our expert team is here to transform your
          hiring strategy and drive exceptional results. Partner with Pranika
          Technologies and Consulting Pvt. Ltd. and experience the difference
          that expert recruitment solutions can make. Contact us today to learn
          more about how we can help you find and hire the best talent for your
          organization.
        </Typography>
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
      </Box>
    </>
  );
}
