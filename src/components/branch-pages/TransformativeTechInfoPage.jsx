import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Box, Grid, Paper } from "@mui/material";
import {
  techDetails,
  aiTimeline,
  analyticsTimline,
} from "../../constants/MissionAndVisionContants";

export default function TransformativeTechInfoPage() {
  const renderingCards = techDetails.map((info) => {
    return (
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
    );
  });
  const renderAiTimline = aiTimeline.map((info) => {
    return (
      <TimelineItem key={info.id}>
        <TimelineSeparator>
          <TimelineDot variant={info.variant} color={info.buttonColor} />
          {info.point < aiTimeline.length && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent
          color={info.point % 2 !== 0 ? info.color : info.buttonColor}
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
          {info.point < analyticsTimline.length && <TimelineConnector />}
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
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        padding='3%'
        textAlign='center'
      >
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
