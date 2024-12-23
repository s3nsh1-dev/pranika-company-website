import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import AboutPranikaAccordion from "./AboutPranikaAccordian";
// import MeetOurTeam from "./MeetOurTeam";
import HeroSection from "./HeroSection";
import HomepageYoutubeSuggestions from "./HomepageYoutubeSuggestions";
import GenericKeywords from "../derived-pages/GenericKeywords";

export default function Homepage() {
  return (
    <>
      <GenericKeywords />
      <SecondryNavbar />
      <HeroSection />
      <HomepageYoutubeSuggestions />
      <AboutPranikaAccordion />
      {/* <MeetOurTeam /> */}
      <PrimaryFooter />
    </>
  );
}
