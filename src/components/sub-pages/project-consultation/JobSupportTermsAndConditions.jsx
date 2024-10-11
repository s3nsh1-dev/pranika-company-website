import React from "react";
import { Box, Typography } from "@mui/material";
import { TermsAndConditionOfJobSupportIndia } from "../../../constants/ProjectConsultationConstants";

export default function JobSupportTermsAndConditions() {
  const renderingTnC = TermsAndConditionOfJobSupportIndia.map((tnc) => {
    return (
      <Typography component='li' key={tnc.id} sx={{ margin: "10px 0px" }}>
        {tnc.content}
      </Typography>
    );
  });
  return (
    <Box sx={{ margin: "20px 3%" }}>
      <Typography variant='h6'>Terms and Conditions</Typography>
      <Box component='ol'>{renderingTnC}</Box>
    </Box>
  );
}
