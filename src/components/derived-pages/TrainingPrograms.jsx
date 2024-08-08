import React from "react";
import { Box, Typography, List } from "@mui/material";
import { Outlet } from "react-router-dom";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import { commitmentsDetails } from "../../constants/TrainingPageConstants";
import TrainingCoursesInfoAccordian from "../branch-pages/TrainingCoursesInfoAccordian";
import TrainingCommitmentDetails from "../branch-pages/TrainingCommitmentDetails";

export default function TrainingPrograms() {
  return (
    <>
      <SecondryNavbar />
      <Box sx={{ padding: "0px 10px" }}>
        <Box margin='2% 0px'>
          <Typography
            sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
            textAlign='center'
          >
            Courses Offered
          </Typography>
          <Typography fontWeight='bold' textAlign='justify' marginTop='10px'>
            At Pranika Technologies and Consulting Pvt. Ltd., we are dedicated
            to equipping individuals with the skills and knowledge needed to
            excel in today's rapidly evolving technological landscape. Our
            courses are meticulously designed to address the current demands of
            the industry, focusing on the latest trends and advancements in
            technology.
          </Typography>
        </Box>
        <TrainingCoursesInfoAccordian />
        <Box sx={{ padding: "40px 0px" }}>
          <List>
            <Typography variant='h5' fontWeight='bold'>
              Our Commitment
            </Typography>
            {commitmentsDetails.map((commit) => {
              return (
                <TrainingCommitmentDetails key={commit.id} commit={commit} />
              );
            })}
          </List>
          <Typography fontWeight='bold' marginTop='10px' textAlign='justify'>
            Join us at Pranika Technologies and Consulting Pvt. Ltd., where we
            empower individuals with the knowledge and skills to succeed in the
            ever-changing world of technology. Our courses are more than just
            educational experiences; they are pathways to a brighter future in
            the tech industry.
          </Typography>
        </Box>
      </Box>
      <PrimaryFooter />
      <Outlet />
    </>
  );
}
