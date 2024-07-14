import React from "react";
import IdCards from "./IdCards";
import { Typography, Box } from "@mui/material";

const EmployeeData = [
  { id: 1, name: "Kamal Shukla", about: "He is Engineer" },
  { id: 2, name: "Abhishek Pandey", about: "He is Engineer" },
  { id: 3, name: "Raj Code-with-Thor", about: "He is Engineer" },
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
    <Box sx={{ padding: "30px 0px" }}>
      <Typography
        variant='h4'
        fontFamily='initial'
        textAlign='center'
        padding='30px 0px'
      >
        Meet Our Team
      </Typography>
      <Box sx={CardGrouping}>
        {EmployeeData.map((emp) => {
          return <IdCards key={emp.id} name={emp.name} about={emp.about} />;
        })}
      </Box>
    </Box>
  );
}
