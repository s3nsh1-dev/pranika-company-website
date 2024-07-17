import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import laptopImage from "../../images/lap-sketch-01png.png";
import chartImage from "../../images/chart-sketch-01.png";
import poepleImage from "../../images/people_sketch-01.png";
import starImage from "../../images/star-01.png";

const trainingDetails = [
  {
    id: 0,
    heading: "IT Skill Development",
    details:
      "Empower your employees with comprehensive training programs that cover the latest advancements in  software, programming, and IT infrastructure management. Our courses are designed to enhance their technical expertise and keep them ahead of the curve.",
    image: laptopImage,
    color: "red",
  },
  {
    id: 1,
    heading: "Leadership Development",
    details:
      "Nurture the next generation of leaders within your organization. Our leadership development programs equip your managers and executives with the skills, mindset, and strategic vision necessary to drive organizational success.",
    image: chartImage,
    color: "green",
  },
  {
    id: 2,
    heading: "Soft Skills Training",
    details:
      "Complement your team's technical prowess with essential soft skills training. From effective communication and problem-solving to teamwork and adaptability, our programs help your employees become well-rounded professionals.",
    image: poepleImage,
    color: "blue",
  },
  {
    id: 3,
    heading: "Certification Courses",
    details:
      "Expand your team's expertise and credibility with industry-recognized certification courses. Our training programs cover a wide range of certifications, ensuring your employees stay at the forefront of their respective fields.",
    image: starImage,
    color: "orange",
  },
];

export default function TrainingOfferingInfoPage() {
  const renderGrids = trainingDetails.map((info) => {
    return (
      <>
        <Grid
          item
          xs={12}
          md={6}
          xl={3}
          padding={2}
          textAlign={"justify"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component='img'
            src={info.image}
            alt='laptop-image'
            sx={{ maxHeight: "170px" }}
          />
          <Typography
            variant='h6'
            color={info.color}
            sx={{ fontWeight: "bold" }}
          >
            {info.heading}
          </Typography>
          <Typography>{info.details}</Typography>
        </Grid>
      </>
    );
  });
  return (
    <Box>
      <Typography
        variant='h3'
        textAlign={`center`}
        sx={{ margin: "100px 0px 50px 0px" }}
      >
        Professional Training Offerings
      </Typography>
      <Grid
        container
        sx={{
          padding: "0px 16px",
        }}
      >
        {renderGrids}
      </Grid>
    </Box>
  );
}
