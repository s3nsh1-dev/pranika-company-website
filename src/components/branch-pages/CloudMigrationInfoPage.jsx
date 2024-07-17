import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TimelineUI from "./TimelineUI";

const cloudInfoArray = [
  {
    id: 0,
    heading: "Assessment",
    details:
      "We start by conducting a thorough assessment of your existing IT infrastructure, identifying the workloads and applications that are best suited for cloud migration. This ensures a seamless transition and aligns with your strategic objectives.",
  },
  {
    id: 1,
    heading: "Planning",
    details:
      "Our team of cloud experts works closely with you to develop a comprehensive migration plan, taking into account factors such as security, compliance, and cost optimization. We ensure a well-structured and risk-mitigated approach to your cloud journey.",
  },
  {
    id: 2,
    heading: "Execution",
    details:
      "With meticulous planning and proven methodologies, we execute the cloud migration process, minimizing disruptions and ensuring a smooth transition. Our end-to-end support includes deployment, testing, and ongoing management of your cloud environment.",
  },
];

export default function CloudMigrationInfoPage() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container columns={12}>
        <Grid item xs={12} md={6}>
          <Typography>{cloudInfoArray[0].heading}</Typography>
          <Typography>{cloudInfoArray[0].details}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>{cloudInfoArray[2].heading}</Typography>
          <Typography>{cloudInfoArray[2].details}</Typography>
        </Grid>
      </Grid>
      <TimelineUI />
      <Box>
        <Typography>{cloudInfoArray[1].heading}</Typography>
        <Typography>{cloudInfoArray[1].details}</Typography>
      </Box>
    </Box>
  );
}
