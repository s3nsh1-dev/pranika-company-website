import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Outlet, Link } from "react-router-dom";
import analyticCover from "../../images/analyticsCover.jpg";
import transformCover from "../../images/error-page-image.png";
import operationCover from "../../images/bg-image.jpg";

const analyticsTitle = {
  backgroundColor: "rgba(196, 232, 193, 0.5)",
  border: "4px solid white",
  borderRadius: "20px",
  padding: "15px",
  textAlign: "center",
  color: "white",
  textShadow: "2px 2px #006300",
};
let coverImage;

export default function ShowServiceSubTitle({ title, subtitle }) {
  if (title === "Data Analytics") {
    coverImage = analyticCover;
  }
  if (title === "Data Transformation") {
    coverImage = transformCover;
  }
  if (title === "Data Operations") {
    coverImage = operationCover;
  }
  const dataAnalyticsCoverStyle = {
    background: `url(${coverImage})`,
    height: "70vh",
    width: "100%",
    padding: "0px 8%",
    backgroundSize: "cover",
    backgroundPostion: "center",
    display: "flex",
    alignItems: "center",
    // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  };
  return (
    <Box sx={dataAnalyticsCoverStyle}>
      <Box sx={analyticsTitle}>
        <Typography fontSize={{ xs: "2.5rem", md: "5rem" }}>{title}</Typography>
        <Typography variant='h6'>{subtitle}</Typography>
        <Box component={Link} to='/contact'>
          <Button
            color='success'
            variant='contained'
            sx={{
              marginTop: "30px",
              border: "2px solid white",
              textTransform: "none",
              paddingRight: "5px",
            }}
          >
            Reach Us <ArrowRightAltIcon sx={{ marginLeft: "5px" }} />
          </Button>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}
