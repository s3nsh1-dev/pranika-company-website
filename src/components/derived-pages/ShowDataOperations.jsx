import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import ShowDataOperationsValue from "../branch-pages/ShowDataOperationsValue";
import CallToActionOperations from "../branch-pages/CallToActionOperations";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import coverImage from "../../images/data-operations-cover.jpg";
import transformationImage from "../../images/data-transformation.jpg";
import {
  title,
  subtitle,
  pointsTitle,
  contentPoints,
  pageTitle,
  pageStartingContent,
  accordianDataTitle,
  accordianData,
} from "../../constants/DataOperationsPageContants";

export default function ShowDataOperations() {
  return (
    <>
      <SecondryNavbar />
      <ShowServiceSubTitle
        image={coverImage}
        title={title}
        subtitle={subtitle}
      />
      <ShowPageDescriptionAndLinks
        title={pageTitle}
        content={pageStartingContent}
      />
      <ShowServiceDataPoints
        image={transformationImage}
        title={pointsTitle}
        contentPoints={contentPoints}
      />
      <ShowDataOperationsValue
        title={accordianDataTitle}
        content={accordianData}
      />
      <CallToActionOperations />
      <PrimaryFooter />
    </>
  );
}
