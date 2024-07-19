import React from "react";
import MemberDivison from "./MemberDivison";
import { Box, Typography } from "@mui/material";
import bgimage from "../../images/bg-image.jpg";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";

const aboutTeam = [
  {
    id: 0,
    name: "Kamal Shukla",
    position: "",
    shortSummary:
      "12 years as MSBI professional, specializing in  Power BI, SQL, and Azure. Helping others to indroduce with professional Data Analytics.",
    longSummary:
      "With a decade of IT experience, this accomplished MSBI professional and leader has expertise in Power BI, SQL, Azure Data Factory, and cloud technologies. Their extensive knowledge in cloud solutions facilitates scalable and efficient data management. As a strategic manager, they excel in leading teams, driving innovative solutions, and optimizing processes to achieve organizational goals and enhance overall performance.",
    profileLink: "https://www.linkedin.com/in/kamalshuklaptech/",
    mail: "kamal.shukla@pranikatech.com",
  },
  {
    id: 1,
    name: "Abhishek Pandey",
    position: "",
    shortSummary:
      "HR analyst with 10+ years of experience, adept in recruitment, data analysis, and handling US clients. Proficient in Excel, Power BI, and SQL.",
    longSummary:
      "An experienced HR analyst with a diverse educational background, holding a Bachelor's degree in Pharmacy and an MBA in Operations and Finance. With over a decade of expertise, this professional has a robust track record in recruitment, training, and development. They excel in streamlining HR processes and enhancing employee engagement, consistently driving operational efficiency and strategic HR initiatives. Possessing strong analytical and statistical skills, they are dedicated to continuous improvement and delivering tangible results.",
    profileLink: "https://www.linkedin.com/in/abhishekalld/",
    mail: "abhishek.p@pranikatech.com",
  },
  {
    id: 2,
    name: "Raj Goswami",
    position: "",
    shortSummary:
      "Full Stack ReactJS Developer and freelancer. With expertise in web applications, delivering high-quality, data-driven solutions.",
    longSummary:
      "Seasoned Full Stack ReactJS Developer with extensive experience in creating dynamic and responsive web applications. Currently working as a freelancer, Ram specializes in leveraging ReactJS to develop comprehensive, user-friendly interfaces and robust back-end systems. Expertise spans across React, JavaScript, TypeScript and a variety of other web development technologies. With a strong focus on delivering high-quality, data-driven solutions success found on numerous projects that integrate seamlessly with data analytics tools.",
    profileLink: "https://www.youtube.com/@RAMGI635",
    mail: "ram.goswami@pranikatech.com",
  },
];
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
            MIND BEHIND OUR VISION
          </Typography>
          <Box sx={{ paddingBottom: "50px" }}>{renderMemberDivision}</Box>
        </Box>
      </Box>
      <PrimaryFooter />
    </>
  );
}
