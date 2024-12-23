import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import ChoosingDataTransformation from "../branch-pages/ChoosingDataTransformation";
import CallToActionTransformation from "../branch-pages/CallToActionTransformation";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import transformationImage from "../../images/data-transformation.jpg";
import coverImage from "../../images/artificial-intelligence.jpg";
import {
  title,
  subtitle,
  pointsTitle,
  contentPoints,
  secondaryDataPointsTitle,
  secondaryDataPoints,
  pageTitle,
  pageStartingContent,
} from "../../constants/DataTransformationPageContants";

export default function ShowDataTransformation() {
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
      <ChoosingDataTransformation
        title={secondaryDataPointsTitle}
        content={secondaryDataPoints}
      />
      <CallToActionTransformation />
      <PrimaryFooter />
    </>
  );
}
