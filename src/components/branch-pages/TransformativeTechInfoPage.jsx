import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Box, Grid, Paper } from "@mui/material";

const techDetails = [
  {
    id: 0,
    heading: "Artificial Intelligence and Machine Learning",
    details:
      "Leverage the power of AI and ML to drive innovation and unlock new business opportunities. Our expert team helps you harness the latest advancements in these technologies to automate processes, enhance decision-making, and improve customer experiences.",
  },
  {
    id: 1,
    heading: "Internet of Things (IoT)",
    details:
      "Unlock the potential of IoT by integrating connected devices and sensors across your organization. We help you design and implement IoT solutions that optimize operations, improve efficiency, and enhance your overall business performance.",
  },
  {
    id: 2,
    heading: "Cybersecurity",
    details:
      "In an increasingly complex digital landscape, comprehensive cybersecurity measures are crucial. Our experts provide end-to-end security solutions to safeguard your critical data, systems, and infrastructure, ensuring the protection of your business and its valuable assets.",
  },
  {
    id: 3,
    heading: "Blockchain",
    details:
      "Explore the transformative potential of blockchain technology to streamline processes, enhance transparency, and build trust. We work with you to identify and implement blockchain-based solutions that drive innovation and competitive advantage in your industry.",
  },
];
const aiTimeline = [
  {
    id: 0,
    heading: "Azure DevOps Training",
    details:
      "Covers the full software development lifecycle, equipping participants with the skills to automate, integrate, and deliver applications efficiently.",
    variant: "outlined",
    buttonColor: "error",
  },
  {
    id: 1,
    heading: "AWS DevOps Training",
    details:
      "Dives deep into the AWS platform and DevOps best practices, providing expertise in cloud infrastructure.",
    variant: "filled",
    buttonColor: "success",
    color: "green",
  },
  {
    id: 2,
    heading: "Apache Kafka Training",
    details:
      "Covers the powerful distributed streaming platform, providing training in data-related technologies.",
    variant: "outlined",
    buttonColor: "primary",
  },
  {
    id: 3,
    heading: "Data Analytics and Data Engineering",
    details:
      "Provides foundational courses in data-related disciplines to equip participants with in5 demand skills.",
    variant: "filled",
    buttonColor: "warning",
    color: "orange",
  },
  {
    id: 4,
    heading: "Django and PHP Training",
    details:
      "Teaches aspiring developers how to build dynamic, feature-rich web applications.",
    variant: "outlined",
    buttonColor: "secondary",
  },
];
const analyticsTimline = [
  {
    id: 0,
    heading: "Azure DevOps Training",
    details:
      "Covers the full software development lifecycle, equipping participants with the skills to automate, integrate, and deliver applications efficiently.",
  },
  {
    id: 1,
    heading: "AWS DevOps Training",
    details:
      "Dives deep into the AWS platform and DevOps best practices, providing expertise in cloud infrastructure.",
  },
  {
    id: 2,
    heading: "Apache Kafka Training",
    details:
      "Covers the powerful distributed streaming platform, providing training in data-related technologies.",
  },
  {
    id: 3,
    heading: "Data Analytics and Data Engineering",
    details:
      "Provides foundational courses in data-related disciplines to equip participants with in5 demand skills.",
  },
  {
    id: 4,
    heading: "Django and PHP Training",
    details:
      "Teaches aspiring developers how to build dynamic, feature-rich web pplications",
  },
];
export default function TransformativeTechInfoPage() {
  const renderingCards = techDetails.map((info) => {
    return (
      <>
        <Grid
          item
          key={info.id}
          xs={12}
          md={5}
          padding={2}
          sx={{
            backgroundColor: "#070066",
            color: "white",
            margin: "20px",
            borderRadius: "20px",
            minHeight: "150px",
          }}
        >
          <Typography variant='h6' fontWeight={`bold`}>
            {info.heading}
          </Typography>
          <Typography>{info.details}</Typography>
        </Grid>
      </>
    );
  });
  const renderAiTimline = aiTimeline.map((info) => {
    return (
      <TimelineItem key={info.id}>
        <TimelineSeparator>
          <TimelineDot variant={info.variant} color={info.buttonColor} />
          {info.id < aiTimeline.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent
          color={info.id % 2 !== 0 ? info.color : info.buttonColor}
        >
          <Typography fontWeight={`bold`}>{info.heading}</Typography>
          <Typography>{info.details}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
  const renderAnalyticsTimeline = analyticsTimline.map((info) => {
    return (
      <TimelineItem key={info.id}>
        <TimelineSeparator>
          <TimelineDot
            variant='outlined'
            color='inherit'
            sx={{ margin: "15px" }}
          />
          {info.id < analyticsTimline.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            sx={{ padding: "16px", borderRadius: "20px", color: "#070066" }}
            elevation={4}
          >
            <Typography fontWeight={`bold`}>{info.heading}</Typography>
            <Typography>{info.details}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  });
  return (
    <Box>
      <Typography variant='h3' padding={8} textAlign='center'>
        Transformative Technology
      </Typography>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {renderingCards}
      </Grid>
      <Timeline position='alternate'>{renderAiTimline}</Timeline>
      <Timeline position='alternate-reverse'>
        {renderAnalyticsTimeline}
      </Timeline>
    </Box>
  );
}
