import React from "react";
import ItServiceInfoPage from "../branch-pages/ItServiceInfoPage";
import CloudMigrationInfoPage from "../branch-pages/CloudMigrationInfoPage";
import TransformativeTechInfoPage from "../branch-pages/TransformativeTechInfoPage";
import TrainingOfferingInfoPage from "../branch-pages/TrainingOfferingInfoPage";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import { Box } from "@mui/material";

export default function MissionAndVission() {
  return (
    <Box>
      <SecondryNavbar />
      <Box sx={{ marginBottom: "30px" }}>
        <ItServiceInfoPage />
        <CloudMigrationInfoPage />
        <TransformativeTechInfoPage />
        <TrainingOfferingInfoPage />
      </Box>
      <PrimaryFooter />
    </Box>
  );
}
