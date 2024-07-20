import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        padding='3%'
        textAlign='center'
      >
        Cloud Migration Expertise
      </Typography>
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          sm={6}
          padding={2}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant='h6' fontWeight={`bold`}>
            {cloudInfoArray[0].heading}
          </Typography>
          <Typography sx={{ maxWidth: "500px" }}>
            {cloudInfoArray[0].details}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          padding={2}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant='h6' fontWeight={`bold`}>
            {cloudInfoArray[2].heading}
          </Typography>
          <Typography
            sx={{
              maxWidth: "500px",
            }}
          >
            {cloudInfoArray[2].details}
          </Typography>
        </Grid>
      </Grid>
      {!isSmallScreen && <TimelineUI />}
      <Box sx={{ textAlign: "center", maxWidth: "500px" }} padding={2}>
        <Typography variant='h6' fontWeight={`bold`}>
          {cloudInfoArray[1].heading}
        </Typography>
        <Typography>{cloudInfoArray[1].details}</Typography>
      </Box>
    </Box>
  );
}
