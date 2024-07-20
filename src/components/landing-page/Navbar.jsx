import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Test from "../../Test";
import NavbarPrimaryContent from "./NavbarPrimaryContent";
import NavbarSecondaryContent from "./NavbarSecondaryContent";

export default function Navbar() {
  return (
    <>
      <Box>
        <AppBar
          position='static'
          sx={{
            backgroundColor: "#070066",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Toolbar disableGutters>
            <NavbarPrimaryContent />
            {/* <NavbarSecondaryContent /> */}
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
      {/* <Test /> */}
    </>
  );
}
