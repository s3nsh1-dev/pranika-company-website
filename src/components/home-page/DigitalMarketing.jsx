import React from "react";
import SecondryNavbar from "./SecondryNavbar";
import PrimaryFooter from "./PrimaryFooter";
import AboutDigitalMarketing from "../branch-pages/AboutDigitalMarketing";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import { Box, Typography } from "@mui/material";
import DigitalMarketingFooter from "../branch-pages/DigitalMarketingFooter";
import {
  pageTitle,
  pageTitleContent,
  footerTitle,
  footerText,
  footerContentSubText,
} from "../../constants/DigitalMarketingConstants";

export default function DigitalMarketing() {
  return (
    <>
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
