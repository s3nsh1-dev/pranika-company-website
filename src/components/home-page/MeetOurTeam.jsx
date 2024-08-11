import React from "react";
import IdCards from "./IdCards";
import { Typography, Box } from "@mui/material";
import { EmployeeData } from "../../constants/TeamMembersProfileInfoContant";

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
