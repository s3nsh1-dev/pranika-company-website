import React from "react";
import SecondryNavbar from "../../home-page/SecondryNavbar";
import PrimaryFooter from "../../home-page/PrimaryFooter";
import GenericKeywords from "../../derived-pages/GenericKeywords";
import StickyWhatAppLogo from "./StickyWhatAppLogo";
import { AboutOurSupportService } from "../../../constants/ProjectConsultationConstants";
import ShowPageDescriptionAndLinks from "../../branch-pages/ShowPageDescriptionAndLinks";
import JobSupportTermsAndConditions from "./JobSupportTermsAndConditions";
import FastCommunicationWithWhatsApp from "./FastCommunicationWithWhatsApp";
import JobSupportMiddleContent from "./JobSupportMiddleContent";
import TechStackForJobSupport from "./TechStackForJobSupport";

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
      <TechStackForJobSupport />
      <JobSupportMiddleContent />
      <JobSupportTermsAndConditions />
      <StickyWhatAppLogo />
      <PrimaryFooter />
    </>
  );
}
