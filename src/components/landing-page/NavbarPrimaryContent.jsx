import React from "react";
import plogo from "../../images/p-bg-less-copy.png";
import { Link } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function NavbarPrimaryContent() {
  const theme = useTheme();
  const isXSOrLess = useMediaQuery(theme.breakpoints.down("sm"));
  const largeScreenTitle = "Pranika Technologies and Consulting Pvt. Ltd.";
  const smallScreenTitle = "Pranika Technologies";

  return (
    <Box
      component={Link}
      to='/'
      aria-label="Go to Pranika Technologies' Landing Page"
      sx={{
        textDecoration: "none",
        color: "inherit",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <img
          src={plogo}
          alt='Pranika Technologies logo'
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50px",
            margin: "0px 10px 0px 30px",
          }}
        />
        <Typography fontSize={`1.4em`}>
          {isXSOrLess ? smallScreenTitle : largeScreenTitle}
        </Typography>
      </Box>
    </Box>
  );
}
