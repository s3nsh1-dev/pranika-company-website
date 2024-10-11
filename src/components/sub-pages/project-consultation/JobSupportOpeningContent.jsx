import React from "react";
import AboutJobSupport from "./AboutJobSupport";
import backVideo from "../../../images/job-support/job-support-bg-video.mp4";
import { Box } from "@mui/material";
import supportPoster from "../../../images/job-support/JS-posterImage.png";

export default function JobSupportOpeningContent() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "70vh", // Ensure the container is at least the full viewport height
        overflow: "hidden",
        color: "white",
        objectFit: "cover", // Keep the video covered inside the container
      }}
    >
      <video
        playsInline
        loop
        preload='auto'
        muted
        autoPlay
        style={{
          position: "absolute", // Absolute positioning to cover the parent div
          top: 0,
          left: 0,
          width: "100%", // Ensure the video stretches to 100% width of the container
          height: "100%", // Ensure the video also covers the height of the container
          objectFit: "cover", // This makes sure the video scales correctly
          zIndex: "-1", // Put the video behind other elements
          filter: "blur(5px)", // Optional blur effect for a nice background look
          transform: "scale(1.05)", // Slight scaling to cover edges
        }}
      >
        <source src={backVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", xl: "row" } }}>
        <AboutJobSupport />
        <img
          src={supportPoster}
          alt='poster for all support facilities'
          style={{ minWidth: "50vw", padding: "20px", borderRadius: "50px" }}
        />
      </Box>
    </div>
  );
}
