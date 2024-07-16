import React from "react";
import { AppBar } from "@mui/material";
import AboutPranikaAccordian from "./AboutPranikaAccordian";
import AffixBar from "./AffixBar";
import Body from "../landing-page/Body";
import MeetOurTeam from "./MeetOurTeam";

export default function SecondryNavbar() {
  return (
    <div>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: "white",
          color: "black",
          // border: "1px solid grey",
          // boxShadow: "none",
        }}
      >
        <AffixBar />
      </AppBar>
      {/* <Body /> */}
      {/* <AboutPranikaAccordian /> */}
      {/* <MeetOurTeam /> */}
    </div>
  );
}
