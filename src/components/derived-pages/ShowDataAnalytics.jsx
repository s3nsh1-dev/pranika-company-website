import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import ShowDataAnalyticsApplication from "../branch-pages/ShowDataAnalyticsApplication";
import WhyChooseDataAnalytics from "../branch-pages/WhyChooseDataAnalytics";

const title = "Data Analytics";
const subtitle =
  "Sharpen your competitive edge with AI and real-time analytics";

export default function ShowDataAnalytics() {
  return (
    <>
      <ShowServiceSubTitle title={title} subtitle={subtitle} />
      <ShowServiceDataPoints />
      <WhyChooseDataAnalytics />
      <ShowDataAnalyticsApplication />
    </>
  );
}
