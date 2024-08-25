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
      <SecondryNavbar />
      <HeadLineOfThePage>Courses Offered</HeadLineOfThePage>
      <ShowPageDescriptionAndLinks
        title={pageHeadTitle}
        content={pageHeadContent}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TrainingCoursesInfoAccordian />
      </Box>
      <TrainingCommitments />
      <TrainingPrgramFooter />
      <PrimaryFooter />
    </>
  );
}
