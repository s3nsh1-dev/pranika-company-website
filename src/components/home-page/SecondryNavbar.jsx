import React from "react";
import { AppBar, Box } from "@mui/material";
import AffixBar from "./AffixBar";

export default function SecondryNavbar() {
  return (
    <Box>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <AffixBar />
      </AppBar>
    </Box>
  );
}
