import React from "react";
import { Typography, Box } from "@mui/material";
import suitcase from "../../images/suitcase.png";
import employees from "../../images/employees.png";
import research from "../../images/seo.png";
import schedule from "../../images/daily-task.png";
import interview from "../../images/meeting.png";
import onboarding from "../../images/onboarding.png";
import "./visionMethodology.css";

const pranikaMethodologies = [
  {
    id: 0,
    title: "Evolving Business Needs",
    image: suitcase,
    pointsCount: 3,
    points: [
      "Identifying a job requirement.",
      "Initial Discussion.",
      "JD provided by the Client",
    ],
  },
  {
    id: 1,
    title: "Talent Acquisition Tool",
    image: employees,
    pointsCount: 4,
    points: [
      "Unique Talent Acquisition Questionnaire.",
      "Understanding the organization’s real need.",
      "Calibrating with the client.",
      "High Level Detailed Job Profile.",
    ],
  },
  {
    id: 2,
    title: "Research",
    image: research,
    pointsCount: 3,
    points: [
      "Data Driven talent Intelligence.",
      "Finding and using social insights to identify relevant candidates.",
      "Leveraging Industry trends to create Predictive Hiring Strategies.",
    ],
  },
  {
    id: 3,
    title: "Customized Mandate Assessment Tool",
    image: schedule,
    pointsCount: 4,
    points: [
      "Candidate Review & opportunity profiling.",
      "Market Feedback.",
      "Benchmarking of candidate.",
      "Behavioral & competency assessment & Candidate’s persona.",
    ],
  },
  {
    id: 4,
    title: "Interview and Assessment with the Client",
    image: interview,
    pointsCount: 4,
    points: [
      "Facilitation of the interview.",
      "Discreet and confidential background checks.",
      "360-degree referencing.",
      "Negotiating and building the employer’s brand.",
    ],
  },
  {
    id: 5,
    title: "Onboarding",
    image: onboarding,
    pointsCount: 2,
    points: [
      "Assimilating the candidate into the new position.",
      "Interactions at regular intervals until a period of 6 months to solidify the candidates tenure with the company.",
    ],
  },
];

export default function VisionMethodology() {
  const renderMethodologies = pranikaMethodologies.map((method) => {
    return (
      <Box className='card' key={method.id}>
        <Box>
          <img
            src={method.image}
            alt={`image${method.pointsCount}`}
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <Typography variant='h6'>{method.title}</Typography>
        </Box>
        <Box className='card__content'>
          <Typography className='card__title'>{method.title}</Typography>
          <ul>
            {method.points.map((point) => {
              return <li key={method.id}>{point}</li>;
            })}
          </ul>
        </Box>
      </Box>
    );
  });
  return (
    <Box sx={{ padding: " 0px 5%" }}>
      <Typography
        textAlign='center'
        margin='2%'
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
      >
        Our Methodology
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderMethodologies}
      </Box>
    </Box>
  );
}
