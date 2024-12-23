import React from "react";
import { Box } from "@mui/material";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import {
  pageHeadTitle,
  pageHeadContent,
} from "../../constants/TrainingPageConstants";
import TrainingCoursesInfoAccordian from "../branch-pages/TrainingCoursesInfoAccordian";
import ShowPageDescriptionAndLinks from "../branch-pages/ShowPageDescriptionAndLinks";
import styled from "styled-components";
import TrainingCommitments from "./TrainingCommitments";
import TrainingPrgramFooter from "../branch-pages/TrainingPrgramFooter";
import whyImage from "../../images/WhyPranikaPoster.jpg";
import regImage from "../../images/ResgistrationPoster.jpg";
import reel1 from "../../images/info-videos/SQL Course.mp4";
import reel2 from "../../images/info-videos/Digital Marketing Course.mp4";
import GenericKeywords from "./GenericKeywords";
import TrainingCourseReelsAndPoster from "./TrainingCourseReelsAndPoster";

const HeadLineOfThePage = styled("p")({
  margin: 0,
  padding: 0,
  marginTop: "10px",
  fontSize: "3rem",
  textAlign: "center",
});

export default function TrainingPrograms() {
  return (
    <>
      <GenericKeywords />
      <SecondryNavbar />
      <HeadLineOfThePage>Courses Offered</HeadLineOfThePage>
      <ShowPageDescriptionAndLinks
        title={pageHeadTitle}
        content={pageHeadContent}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TrainingCoursesInfoAccordian />
      </Box>
      <TrainingCourseReelsAndPoster
        image={whyImage}
        video={reel1}
        reelPosition='right'
      />
      <TrainingCommitments />
      <TrainingCourseReelsAndPoster
        image={regImage}
        video={reel2}
        reelPosition='left'
      />
      <TrainingPrgramFooter />
      <PrimaryFooter />
    </>
  );
}
