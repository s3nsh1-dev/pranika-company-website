import React from "react";
import ShowRecruitmentIntro from "../branch-pages/ShowRecruitmentIntro";
import ShowRecruitmentNeeds from "../branch-pages/ShowRecruitmentNeeds";
import ShowRecruitmentSteps from "../branch-pages/ShowRecruitmentSteps";
import { Box, Typography } from "@mui/material";

export default function RecruitmentForBuisness() {
  return (
    <>
      <ShowRecruitmentIntro />
      <ShowRecruitmentNeeds />
      <Box sx={{ padding: "2%" }}>
        <Typography
          sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
          textAlign='center'
          padding={2}
        >
          Ready to Transform Your Hiring Process?
        </Typography>
        <Typography>
          Partner with Pranika Technologies and Consulting Pvt. Ltd. and
          experience the difference that expert recruitment solutions can make.
          Contact us today to learn more about how we can help you find and hire
          the best talent for your organization.
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
      <ShowRecruitmentSteps />
    </>
  );
}
