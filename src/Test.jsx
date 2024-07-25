import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const courseInformation = [
  { id: 0, courseName: "Big Data", courseLink: "/comingsoon" },
  { id: 1, courseName: "Data Science", courseLink: "/comingsoon" },
  { id: 2, courseName: "Power BI", courseLink: "/comingsoon" },
  { id: 3, courseName: "Machine Learning", courseLink: "/comingsoon" },
  { id: 4, courseName: "Generative AI", courseLink: "/comingsoon" },
  { id: 5, courseName: "Azure", courseLink: "/comingsoon" },
  { id: 6, courseName: "AWS", courseLink: "/comingsoon" },
  { id: 7, courseName: "ReactJS", courseLink: "/comingsoon" },
];

export default function Test() {
  const [expandedId, setExpandedId] = useState(null);

  const handleAccordionChange = (id) => {
    setExpandedId((prevExpandedId) => (prevExpandedId === id ? null : id));
  };

  return (
    <Box sx={{ padding: "0 10px" }}>
      <Box margin='2% 0'>
        <Typography
          sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
          textAlign='center'
        >
          Courses Offered
        </Typography>
        <Typography fontWeight='bold' textAlign='justify' marginTop='10px'>
          At Pranika Technologies and Consulting Pvt. Ltd., we are dedicated to
          equipping individuals with the skills and knowledge needed to excel in
          today's rapidly evolving technological landscape. Our courses are
          meticulously designed to address the current demands of the industry,
          focusing on the latest trends and advancements in technology.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {courseInformation.map((course) => (
          <Accordion
            key={course.id}
            expanded={expandedId === course.id}
            onChange={() => handleAccordionChange(course.id)}
            sx={{
              width: "calc(50% - 16px)",
              flex: "1 1 calc(50% - 16px)",
              mb: 2,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${course.id}-content`}
              id={`panel-${course.id}-header`}
            >
              {course.courseName}
            </AccordionSummary>
            <AccordionDetails>
              Course details for {course.courseName} will go here.
            </AccordionDetails>
            <Button component={Link} to={course.courseLink}>
              Learn More
            </Button>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
