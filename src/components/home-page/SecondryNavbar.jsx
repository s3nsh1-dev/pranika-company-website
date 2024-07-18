import React from "react";
import { AppBar } from "@mui/material";
import AffixBar from "./AffixBar";

export default function SecondryNavbar() {
  return (
    <div>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <AffixBar />
      </AppBar>
    </div>
  );
}
