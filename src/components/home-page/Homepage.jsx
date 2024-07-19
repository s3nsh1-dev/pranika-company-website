import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import Body from "../landing-page/Body";
import AboutPranikaAccordion from "./AboutPranikaAccordian";
import MeetOurTeam from "./MeetOurTeam";
import HeroSection from "./HeroSection";

export default function Homepage() {
  return (
    <>
      <SecondryNavbar />
      <HeroSection />
      <AboutPranikaAccordion />
      <MeetOurTeam />
      <PrimaryFooter />
    </>
  );
}
