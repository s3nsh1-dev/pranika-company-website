import React from "react";
import Navbar from "../landing-page/Navbar";
import SecondryNavbar from "./SecondryNavbar";
import Footer from "../landing-page/Footer";
import PrimaryFooter from "./PrimaryFooter";
import TeamSummary from "../derived-pages/TeamSummary";
import MissionAndVision from "../derived-pages/MissionAndVision";

export default function Homepage() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SecondryNavbar /> */}
      {/* <TeamSummary /> */}
      <MissionAndVision />
      {/* <PrimaryFooter /> */}
      {/* <Footer /> */}
    </>
  );
}
