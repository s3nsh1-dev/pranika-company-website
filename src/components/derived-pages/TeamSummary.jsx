import React from "react";
import MemberDivison from "./MemberDivison";
import { Box, Typography } from "@mui/material";
import bgimage from "../../images/bg-image.jpg";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import { aboutTeam } from "../../constants/TeamSummaryContant";

export default function TeamSummary() {
  const renderMemberDivision = aboutTeam.map((member) => {
    return (
      <MemberDivison
        key={member.id}
        id={member.id}
        name={member.name}
        position={member.position}
        longSummary={member.longSummary}
        profileLink={member.profileLink}
        mail={member.mail}
      />
    );
  });
  return (
    <>
      <SecondryNavbar />
      <Box
        sx={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover", // Ensures the background image covers the entire box
          backgroundPosition: "center", // Centers the background image
          backgroundBlendMode: "hard-light",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            margin: { xs: " 0px 20px", sm: " 0px 40px", md: "0px 120px" },
          }}
        >
          <Typography
            variant='h3'
            textAlign='center'
            fontWeight='bold'
            color='white'
            sx={{ paddingTop: "40px" }}
          >
            Minds Behind Our Vision
          </Typography>
          <Box sx={{ paddingBottom: "50px" }}>{renderMemberDivision}</Box>
        </Box>
      </Box>
      <PrimaryFooter />
    </>
  );
}
