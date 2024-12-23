import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import vback from "../../images/landing-page-cover/LandingCoverVideo.mp4";
// import vback from "../../images/job-support/job-support-bg-video.mp4";
import { Outlet, Link } from "react-router-dom";
import posterImg from "../../images/landing-page-cover/landing-page-poster.png";
import "./Body.css";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  color: theme.palette.common.white,
  padding: theme.spacing(4),
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const VideoBackground = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
});

const Body = () => {
  const theme = useTheme();

  return (
    <HeroContainer theme={theme}>
      <VideoBackground
        autoPlay
        loop
        muted
        playsInline
        poster={posterImg}
        preload='auto'
      >
        <source src={vback} type='video/mp4' />
        Your browser does not support the video tag.
      </VideoBackground>
      {/* <HeroContent maxWidth='md' theme={theme}> */}
      <Box className='overlay'>
        <Box className='welcome-card puff-in-center'>
          <Box sx={{ margin: "10px" }}>
            <Typography variant='h2' className='transparent-text'>
              Explore our Features
            </Typography>
          </Box>
          <Box component={Link} to='/home'>
            <Button
              variant='outlined'
              className='roll-in-left'
              sx={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                fontWeight: "400",
                color: "white",
                border: "1px solid white",
              }}
            >
              START
            </Button>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </HeroContainer>
  );
};

export default Body;
