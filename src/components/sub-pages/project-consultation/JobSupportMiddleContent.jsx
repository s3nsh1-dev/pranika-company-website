import React from "react";
import AboutJobSupport from "./AboutJobSupport";
import backVideo from "../../../images/job-support/job-support-bg-video.mp4";
import { Box } from "@mui/material";
import supportPoster from "../../../images/job-support/JS-posterImage.png";

const parentContainer = {
  position: "relative",
  minHeight: "70vh", // Ensure the container is at least the full viewport height
  overflow: "hidden",
  color: "white",
  objectFit: "cover", // Keep the video covered inside the container
};
const makeVideoBlendInBackground = {
  position: "absolute", // Absolute positioning to cover the parent div
  top: 0,
  left: 0,
  width: "100%", // Ensure the video stretches to 100% width of the container
  height: "100%", // Ensure the video also covers the height of the container
  objectFit: "cover", // This makes sure the video scales correctly
  zIndex: "-1", // Put the video behind other elements
  filter: "blur(5px)", // Optional blur effect for a nice background look
  transform: "scale(1.05)", // Slight scaling to cover edges
};
const responsiveContainerStyle = {
  display: "flex",
  flexDirection: { xs: "column", xl: "row" },
};
const imgStyle = { minWidth: "50vw", padding: "20px", borderRadius: "50px" };

export default function JobSupportMiddleContent() {
  return (
    <Box sx={parentContainer}>
      <video
        playsInline
        loop
        preload='auto'
        muted
        autoPlay
        style={makeVideoBlendInBackground}
      >
        <source src={backVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Box sx={responsiveContainerStyle}>
        <AboutJobSupport />
        <img
          src={supportPoster}
          alt='poster-for-all-support-facilities'
          style={imgStyle}
        />
      </Box>
    </Box>
  );
}
