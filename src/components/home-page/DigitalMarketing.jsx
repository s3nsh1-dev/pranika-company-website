import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import AboutDigitalMarketing from "../branch-pages/AboutDigitalMarketing";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import DigitalMarketingFooter from "../branch-pages/DigitalMarketingFooter";
import {
  pageTitle,
  pageTitleContent,
  footerTitle,
  footerText,
  footerContentSubText,
} from "../../constants/DigitalMarketingConstants";
import GenericKeywords from "../derived-pages/GenericKeywords";

export default function DigitalMarketing() {
  return (
    <>
      <GenericKeywords />
      <SecondryNavbar />
      <ShowPageDescriptionAndLinks
        title={pageTitle}
        content={pageTitleContent}
      />
      <AboutDigitalMarketing />
      <DigitalMarketingFooter
        title={footerTitle}
        text={footerText}
        subText={footerContentSubText}
      />
      <PrimaryFooter />
    </>
  );
}
