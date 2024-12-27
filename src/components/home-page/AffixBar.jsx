import React from "react";
import { Toolbar, AppBar, useScrollTrigger, Box } from "@mui/material";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import SearchBar from "./navigation/SearchBar";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    style: {
      position: trigger ? 'fixed' : 'relative',
      top: trigger ? 0 : 'auto',
      zIndex: 1100,
      backgroundColor: '#fff',
      boxShadow: trigger ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease-in-out',
    },
  });
}

export default function AffixBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar position="sticky" color="inherit" elevation={0}>
          <Toolbar>
            <MobileNavigation />
            <DesktopNavigation />
            <SearchBar />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}