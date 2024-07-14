import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AboutPranikaAccordian from "./AboutPranikaAccordian";
import GG from "./GG";
import Body from "../landing-page/Body";
import MeetOurTeam from "./MeetOurTeam";

export default function SecondryNavbar() {
  return (
    <div>
      <AppBar
        position='sticky'
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <GG />
      </AppBar>
      <Body />
      <AboutPranikaAccordian />
      <MeetOurTeam />
    </div>
  );
}
