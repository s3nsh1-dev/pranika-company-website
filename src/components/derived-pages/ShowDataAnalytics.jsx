import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import ShowDataAnalyticsApplication from "../branch-pages/ShowDataAnalyticsApplication";
import WhyChooseDataAnalytics from "../branch-pages/WhyChooseDataAnalytics";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import analyticsImage from "../../images/dataAnalytics-1.png";
import coverImage from "../../images/analyticsCover.jpg";

const title = "Data Analytics";
const subtitle =
  "Sharpen your competitive edge with AI and real-time analytics";

const contentPoints = [
  {
    id: 0,
    primary: "Comprehensive Data Analysis & Interpretation:",
    secondary:
      "We help you understand complex data patterns, turning raw data into meaningful insights that drive strategic decisions.",
  },
  {
    id: 1,
    primary: "Advanced Data Visualization:",
    secondary:
      "Our visually engaging and interactive dashboards simplify complex datasets, enabling you to quickly grasp key metrics and trends.",
  },
  {
    id: 2,
    primary: "Predictive Analytics & Forecasting:",
    secondary:
      "With our predictive models, anticipate future trends and make proactive decisions to stay ahead of the competition.",
  },
  {
    id: 3,
    primary: "Data Management & Warehousing:",
    secondary:
      "We organize and secure your data, ensuring it's easily accessible and ready for analysis, while maintaining the highest standards of data integrity.",
  },
  {
    id: 4,
    primary: "Customized Business Intelligence Solutions:",
    secondary:
      "Our solutions are tailored to meet your unique business needs, providing you with actionable insights that improve operational efficiency and profitability.",
  },
];

const pointsTitle =
  "Transform Your Data into Actionable Insights with Our Expertise";

export default function ShowDataAnalytics() {
  return (
    <>
      <SecondryNavbar />
      <ShowServiceSubTitle
        image={coverImage}
        title={title}
        subtitle={subtitle}
      />
      <ShowServiceDataPoints
        image={analyticsImage}
        title={pointsTitle}
        contentPoints={contentPoints}
      />
      <WhyChooseDataAnalytics />
      <ShowDataAnalyticsApplication />
      <PrimaryFooter />
    </>
  );
}
