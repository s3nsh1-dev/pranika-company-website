import React from "react";
import ItServiceInfoPage from "../branch-pages/ItServiceInfoPage";
import CloudMigrationInfoPage from "../branch-pages/CloudMigrationInfoPage";
import TransformativeTechInfoPage from "../branch-pages/TransformativeTechInfoPage";
import TrainingOfferingInfoPage from "../branch-pages/TrainingOfferingInfoPage";
import { Box } from "@mui/material";

export default function MissionAndVission() {
  return (
    <Box>
      {/* <ItServiceInfoPage /> */}
      {/* <CloudMigrationInfoPage /> */}
      <TransformativeTechInfoPage />
      {/* <TrainingOfferingInfoPage /> */}
    </Box>
  );
}
