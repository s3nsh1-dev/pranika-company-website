import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import AboutDigitalMarketing from "../branch-pages/AboutDigitalMarketing";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";

const pageTitle = "Digial Markteting";
const pageTitleContent = "How digital marketing is changing world";

export default function DigitalMarketing() {
  return (
    <>
      <SecondryNavbar />
      <ShowPageDescriptionAndLinks
        title={pageTitle}
        content={pageTitleContent}
      />
      <AboutDigitalMarketing />
      <PrimaryFooter />
    </>
  );
}
