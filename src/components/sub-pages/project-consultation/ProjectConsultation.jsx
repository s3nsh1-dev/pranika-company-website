import React from "react";
import { AboutOurSupportService } from "../../../constants/ProjectConsultation";
import SecondryNavbar from "../../home-page/SecondryNavbar";
import PrimaryFooter from "../../home-page/PrimaryFooter";
import ShowPageDescriptionAndLinks from "../../branch-pages/ShowPageDescriptionAndLinks";
import FastCommunicationWithWhatsApp from "./FastCommunicationWithWhatsApp";
import GenericKeywords from "../../derived-pages/GenericKeywords";
import StickyWhatAppLogo from "./StickyWhatAppLogo";
import AboutJobSupport from "./AboutJobSupport";
import JobSupportTermsAndConditions from "./JobSupportTermsAndConditions";

export default function ProjectConsultation() {
  return (
    <>
      <GenericKeywords />
      <SecondryNavbar />
      <ShowPageDescriptionAndLinks
        title='Live Project Support from India'
        content={AboutOurSupportService}
      />
      <FastCommunicationWithWhatsApp />
      <AboutJobSupport />
      <JobSupportTermsAndConditions />
      <StickyWhatAppLogo />
      <PrimaryFooter />
    </>
  );
}
