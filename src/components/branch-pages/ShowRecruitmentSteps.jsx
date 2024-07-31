import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";
import step5 from "../../images/step5.png";
import step6 from "../../images/step6.png";

const recruitmentProcess = [
  {
    id: 0,
    title: "Needs Assessment",
    content:
      "We begin by understanding your organization’s hiring needs, culture, and goals.",
    image: step1,
  },
  {
    id: 1,
    title: "Strategy Development",
    content:
      "We design a customized recruitment strategy tailored to your specific requirements.",
    image: step2,
  },
  {
    id: 2,
    title: "Candidate Sourcing",
    content:
      "We leverage our network and advanced tools to source and attract top candidates.",
    image: step3,
  },
  {
    id: 3,
    title: "Screening and Evaluation",
    content:
      "Our thorough screening process ensures candidates meet your criteria.",
    image: step4,
  },
  {
    id: 4,
    title: "Candidate Presentation",
    content: "We present you with a shortlist of highly qualified candidates.",
    image: step5,
  },
  {
    id: 5,
    title: "Onboarding Support",
    content:
      "We assist with the onboarding process to ensure a smooth transition for your new hires.",
    image: step6,
  },
];

export default function ShowRecruitmentSteps() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "2.5rem", xs: "2rem" } }}
        textAlign='center'
        padding={2}
      >
        Talent Acquisition Approach
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 1500,
        }}
      >
        {recruitmentProcess.map((step) => (
          <Card
            sx={{ maxWidth: 345, margin: "10px" }}
            key={step.id}
            elevation={4}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={step.image}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {step.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {step.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
