import React from "react";
import Navbar from "../landing-page/Navbar";
import SecondryNavbar from "./SecondryNavbar";
// import AboutPranikaAccordian from "./AboutPranikaAccordian";
import Footer from "../landing-page/Footer";
import PrimaryFooter from "./PrimaryFooter";
import TeamSummary from "../derived-pages/TeamSummary";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <SecondryNavbar />
      <TeamSummary />
      <PrimaryFooter />
      <Footer />
    </>
  );
}
