import React from "react";
import IdCards from "./IdCards";
import { Typography, Box } from "@mui/material";

const EmployeeData = [
  {
    id: 0,
    name: "Kamal Shukla",
    about:
      "12 years as MSBI professional, specializing in Power BI, SQL, and Azure. Helping others to indroduce with professional Data Analytics.",
    profileLink: "https://www.linkedin.com/in/kamalshuklaptech/",
    mail: "kamal.shukla@pranikatech.com",
  },
  {
    id: 1,
    name: "Abhishek Pandey",
    about:
      "HR analyst with 10+ years of experience, adept in recruitment, data analysis, and handling US clients. Proficient in Excel, Power BI, and SQL.",
    profileLink: "https://www.linkedin.com/in/abhishekalld/",
    mail: "Abhishek.p@pranikatech.com",
  },
  {
    id: 2,
    name: "Raj Goswami",
    about:
      "Full Stack ReactJS Developer and freelancer. With expertise in web applications, delivering high-quality, data-driven solutions.",
    profileLink: "https://www.youtube.com/@RAMGI635",
    mail: "ram.goswami@pranikatech.com",
  },
];
const CardGrouping = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
};

export default function MeetOurTeam() {
  return (
    <Box sx={{ padding: "30px 0px", textAlign: "center" }}>
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        padding='30px 0px'
      >
        Meet Our Team
      </Typography>
      <Box sx={CardGrouping}>
        {EmployeeData.map((emp) => {
          return (
            <IdCards
              key={emp.id}
              id={emp.id}
              name={emp.name}
              about={emp.about}
              link={emp.profileLink}
              mail={emp.mail}
            />
          );
        })}
      </Box>
    </Box>
  );
}
