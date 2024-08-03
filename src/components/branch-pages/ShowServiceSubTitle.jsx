import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Outlet, Link } from "react-router-dom";

const analyticsTitle = {
  backgroundColor: "rgb(255,255,255,0.2)",
  border: "4px solid white",
  borderRadius: "20px",
  padding: "15px",
  textAlign: "center",
  color: "white",
  textShadow: "2px 2px 6px black",
};

export default function ShowServiceSubTitle({ image, title, subtitle }) {
  const dataAnalyticsCoverStyle = {
    background: `url(${image})`,
    height: "70vh",
    width: "100%",
    padding: "0px 8%",
    backgroundSize: "cover",
    backgroundPostion: "center",
    display: "flex",
    alignItems: "center",
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
