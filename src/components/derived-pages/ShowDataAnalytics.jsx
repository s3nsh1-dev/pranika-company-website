import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import ShowDataAnalyticsApplication from "../branch-pages/ShowDataAnalyticsApplication";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import analyticsImage from "../../images/dataAnalytics-1.png";
import coverImage from "../../images/analyticsCover.jpg";
import {
  title,
  subtitle,
  contentPoints,
  pageTitle,
  pageStartingContent,
  pointsTitle,
} from "../../constants/DataAnalyticsPageContants";
import GenericKeywords from "./GenericKeywords";

export default function ShowDataAnalytics() {
  return (
    <>
      <GenericKeywords />
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
        image={analyticsImage}
        title={pointsTitle}
        contentPoints={contentPoints}
      />
      <ShowDataAnalyticsApplication />
      <PrimaryFooter />
    </>
  );
}
