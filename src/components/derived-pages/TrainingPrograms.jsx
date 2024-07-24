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
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";

const courseInformation = [
  {
    id: 0,
    courseName: "Big Data",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 1,
    courseName: "Data Science",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 2,
    courseName: "Power BI",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 3,
    courseName: "Machine Learning",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 4,
    courseName: "Generative AI",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 5,
    courseName: "Azure",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 6,
    courseName: "AWS",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
  {
    id: 7,
    courseName: "ReactJS",
    courseSummary: "",
    courseLink: "/comingsoon",
    courseSyllabus: "",
  },
];

const commitmentsDetails = [
  {
    id: 0,
    title: "Industry-Relevant Curriculum",
    details:
      "Our courses are developed in collaboration with industry experts to ensure they cover the most relevant and up-to-date technologies. Whether it's data analytics, data visualization, data transformation, or data operations, our programs are tailored to provide practical skills that are directly applicable in the workplace.",
  },
  {
    id: 0,
    title: "Expert Instructors",
    details:
      "Our instructors are seasoned professionals with extensive experience in their respective fields. They bring real-world insights and hands-on expertise to the classroom, bridging the gap between theoretical knowledge and practical application.",
  },
  {
    id: 0,
    title: "Interactive Learning Experience",
    details:
      "We believe in a hands-on approach to learning. Our courses include interactive sessions, practical exercises, and real-world projects that enable participants to apply what they learn and build a strong portfolio.",
  },
  {
    id: 0,
    title: "Flexible Learning Options",
    details:
      "Understanding the diverse needs of our learners, we offer flexible learning formats, including online and hybrid courses. This flexibility ensures that our programs are accessible to professionals and students alike, regardless of their location or schedule.",
  },
  {
    id: 0,
    title: "Career Support",
    details:
      "We are committed to supporting our learners beyond the classroom. Our courses include career guidance, resume building workshops, and interview preparation sessions, designed to help participants confidently step into the job market.",
  },
];

export default function TrainingPrograms() {
  const renderingCoursesInformation = courseInformation.map((course) => {
    return (
      <Grid item sm={12} md={6} key={course.id}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            {course.courseName}
          </AccordionSummary>
          <AccordionDetails>
            {course.courseSummary}
            Course Details Course Details Course Details Course Details Course
            Details Course Details Course Details Course Details Course Details
            Course Details Course Details Course Details Course Details Course
            Details Course Details Course Details Course Details Course Details
          </AccordionDetails>
          <AccordionActions>
            <Box
              component={Link}
              to={course.courseLink}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ textTransform: "none" }}>Learn More</Button>
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
