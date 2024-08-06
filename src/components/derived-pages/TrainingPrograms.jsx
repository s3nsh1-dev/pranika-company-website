import React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import {
  commitmentsDetails,
  courseInformation,
} from "../../constants/TrainingPageConstants";

const accorStyle = {
  backgroundColor: "#000a7a",
  border: "2px solid #000a7a",
  color: "white",
  margin: "5px 0px",
  padding: "0px 5px 5px 5px",
};

const accorContent = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease-in-out",
  textAlign: "start",
  margin: "0px 10px",
};

export default function TrainingPrograms() {
  const renderingCoursesInformation = courseInformation.map((course) => {
    return (
      <Grid item sm={12} md={6} key={course.id}>
        <Accordion sx={accorStyle} borderRadius='30px'>
          <AccordionSummary
            expandIcon={<AddCircleIcon sx={{ color: "white" }} />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <Typography fontWeight='bold'>{course.courseName}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={accorContent}>
            {course.content.map((content) => (
              <ListItem key={content.id}>
                <ListItemText
                  primary={content.title}
                  secondary={content.about}
                />
              </ListItem>
            ))}
          </AccordionDetails>
          <AccordionActions>
            <Button
              sx={{ textTransform: "none", color: "white" }}
              onClick={course.downloadPDF}
            >
              Syllabus
            </Button>
            <Box
              component={Link}
              to={course.courseLink}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ textTransform: "none", color: "white" }}>
                Learn More
              </Button>
            </Box>
          </AccordionActions>
        </Accordion>
      </Grid>
    );
  });
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
        <Grid container spacing={2}>
          {renderingCoursesInformation}
        </Grid>
        <Box sx={{ padding: "40px 0px" }}>
          <List>
            <Typography variant='h5' fontWeight='bold'>
              Our Commitment
            </Typography>
            {commitmentsDetails.map((commit) => {
              return (
                <ListItem key={commit.id}>
                  <Typography textAlign='justify'>
                    <span style={{ fontWeight: "bold" }}>{commit.title}: </span>
                    {commit.details}
                  </Typography>
                </ListItem>
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
