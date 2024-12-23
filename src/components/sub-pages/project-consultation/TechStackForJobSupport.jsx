import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const techStackTable = [
  { id: 0, tech: "Digital Marketing" },
  { id: 1, tech: "Azure" },
  { id: 2, tech: "Machine Learning" },
  { id: 3, tech: "Business Analysis" },
  { id: 4, tech: "ReactJS" },
  { id: 5, tech: "Generative AI" },
  { id: 6, tech: "Power BI" },
  { id: 7, tech: "Cloud" },
  { id: 8, tech: "Blockchain" },
  { id: 9, tech: "SQL" },
  { id: 10, tech: "Programming" },
  { id: 11, tech: "Cybersecurity, etc." },
];

export default function TechStackForJobSupport() {
  const renderingTechStackList = techStackTable.map((stack) => {
    return (
      <Grid
        item
        md={4}
        sm={6}
        xs={12}
        key={stack.id}
        component='li'
        fontWeight='bold'
      >
        {stack.tech}
      </Grid>
    );
  });
  return (
    <Box sx={{ padding: " 20px 40px" }}>
      <Typography variant='h6' fontWeight='bold'>
        Get Expert Job Support for Your Project or Role
      </Typography>
      <Typography>
        Are you facing challenges with a project or need assistance in the
        following areas?
      </Typography>
      <Grid
        container
        component='ul'
        columns={12}
        sx={{ textAlign: "center", padding: "20px 8%" }}
      >
        {renderingTechStackList}
      </Grid>
      <Typography>
        Our expert job support services from India are here to help you navigate
        these challenges and achieve your goals.
      </Typography>
    </Box>
  );
}
