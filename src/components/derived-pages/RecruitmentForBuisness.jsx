import React from "react";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import ShowRecruitmentNeeds from "../branch-pages/ShowRecruitmentNeeds";
import ShowRecruitmentSteps from "../branch-pages/ShowRecruitmentSteps";
import { Box, Typography } from "@mui/material";

const title = "Ready to Transform Your Hiring Process?";
const content =
  "In today’s competitive job market, finding and hiring top talent is crucial to your organization's success. At Pranika Technologies and Consulting Pvt. Ltd., we specialize in providing comprehensive recruitment solutions that go beyond traditional hiring practices. Whether you need to outsource your recruitment process or seek high-caliber candidates, our expert team is here to transform your hiring strategy and drive exceptional results. Partner with Pranika Technologies and Consulting Pvt. Ltd. and experience the difference that expert recruitment solutions can make. Contact us today to learn more about how we can help you find and hire the best talent for your organization.";

const footerText =
  "Pranika Technologies and Consulting Pvt. Ltd. is your trusted partner in providing cutting-edge IT consulting, seamless cloud migrations, transformative technology solutions, and comprehensive professional training. With the addition of the ISO 9000:2015 certification, we further solidify our commitment to excellence. Our team of skilled experts ensures that our processes align with global best practices, empowering businesses to navigate the ever-evolving digital landscape and achieve their goals.";

export default function RecruitmentForBuisness() {
  return (
    <>
      <ShowPageDescriptionAndLinks title={title} content={content} />
      <ShowRecruitmentSteps />
      <ShowRecruitmentNeeds />
      <Box textAlign='justify' sx={{ padding: "2%" }}>
        <Typography fontWeight='bold'>{footerText}</Typography>
      </Box>
    </>
  );
}
