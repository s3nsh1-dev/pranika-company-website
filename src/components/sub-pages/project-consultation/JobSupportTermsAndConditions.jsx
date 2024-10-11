import React from "react";
import { Box, Typography } from "@mui/material";
import { TermsAndConditionOfJobSupportIndia } from "../../../constants/ProjectConsultationConstants";

const listStyle = { margin: "10px 0px" };
const containerStyle = { margin: "20px 3%" };

export default function JobSupportTermsAndConditions() {
  const renderingTnC = TermsAndConditionOfJobSupportIndia.map((tnc) => {
    return (
      <Typography component='li' key={tnc.id} sx={listStyle}>
        {tnc.content}
      </Typography>
    );
  });
  return (
    <Box sx={containerStyle}>
      <Typography variant='h6'>Terms and Conditions</Typography>
      <Box component='ol'>{renderingTnC}</Box>
    </Box>
  );
}
