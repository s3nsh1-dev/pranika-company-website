import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import vback from "../../images/crop-video-2.mp4";
import { Outlet, Link } from "react-router-dom";
import "../landing-page/Body.css";

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

const HeroContent = styled(Container)(({ theme }) => ({
  zIndex: 1,
  position: "relative",
  padding: theme.spacing(4),
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: theme.spacing(1),
}));

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroContainer theme={theme}>
      <VideoBackground autoPlay loop muted playsInline preload='auto'>
        <source src={vback} type='video/mp4' />
        Your browser does not support the video tag.
      </VideoBackground>
      <HeroContent maxWidth='md' theme={theme}>
        <Typography
          sx={{ fontSize: { sm: "3.5rem", xs: "2.5rem" }, fontWeight: "bold" }}
          gutterBottom
        >
          Join us and achieve greatness
        </Typography>
        <Typography variant='h5' component='p' gutterBottom>
          Discover amazing content and visit our community.
        </Typography>
        <Box component={Link} to='/mission&vision'>
          <HeroButton variant='outlined' size='large' theme={theme}>
            Get Started
          </HeroButton>
        </Box>
      </HeroContent>
      <Outlet />
    </HeroContainer>
  );
};

export default HeroSection;
