import React from "react";
import ShowRecruitmentIntro from "../branch-pages/ShowRecruitmentIntro";
import ShowRecruitmentNeeds from "../branch-pages/ShowRecruitmentNeeds";
import ShowRecruitmentSteps from "../branch-pages/ShowRecruitmentSteps";
import { Box, Typography } from "@mui/material";

export default function RecruitmentForBuisness() {
  return (
    <>
      <ShowRecruitmentIntro />
      <ShowRecruitmentSteps />
      <ShowRecruitmentNeeds />
      <Box textAlign='justify' sx={{ padding: "2%" }}>
        <Typography fontWeight='bold'>
          Pranika Technologies and Consulting Pvt. Ltd. is your trusted partner
          in providing cutting-edge IT consulting, seamless cloud migrations,
          transformative technology solutions, and comprehensive professional
          training. With the addition of the ISO 9000:2015 certification, we
          further solidify our commitment to excellence. Our team of skilled
          experts ensures that our processes align with global best practices,
          empowering businesses to navigate the ever-evolving digital landscape
          and achieve their goals.
        </Typography>
      </Box>
    </>
  );
}
