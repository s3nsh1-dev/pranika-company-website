import React from "react";
import AboutJobSupport from "./AboutJobSupport";
import { Box } from "@mui/material";
import supportPoster from "../../../images/job-support/JS-posterImage.png";

const parentContainer = {
  position: "relative",
  minHeight: "70vh", // Ensure the container is at least the full viewport height
  overflow: "hidden",
  objectFit: "cover", // Keep the video covered inside the container
};
const responsiveContainerStyle = {
  display: "flex",
  flexDirection: { xs: "column", xl: "row" },
};
const imgStyle = { minWidth: "50vw", padding: "20px", borderRadius: "50px" };

export default function JobSupportMiddleContent() {
  return (
    <Box sx={parentContainer}>
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
