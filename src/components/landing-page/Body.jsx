import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import vback from "../../images/crop-video-7.mp4";
import { Outlet, Link } from "react-router-dom";
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
      <VideoBackground autoPlay loop muted>
        <source src={vback} type='video/mp4' />
        Your browser does not support the video tag.
      </VideoBackground>
      {/* <HeroContent maxWidth='md' theme={theme}> */}
      <Box>
        <Box className='overlay'>
          <Box className='welcome-card puff-in-center'>
            <Box>
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
      </Box>
      {/* </HeroContent> */}
      <Outlet />
    </HeroContainer>
  );
};

export default Body;
