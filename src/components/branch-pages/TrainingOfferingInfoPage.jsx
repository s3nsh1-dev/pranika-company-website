import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { trainingDetails } from "../../constants/MissionAndVisionContants";

export default function TrainingOfferingInfoPage() {
  const renderGrids = trainingDetails.map((info) => {
    return (
      <Grid
        item
        key={info.id}
        xs={12}
        md={6}
        xl={3}
        padding={2}
        textAlign={"justify"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component='img'
          src={info.image}
          alt='laptop-image'
          sx={{ maxHeight: "170px" }}
        />
        <Typography variant='h6' color={info.color} sx={{ fontWeight: "bold" }}>
          {info.heading}
        </Typography>
        <Typography>{info.details}</Typography>
      </Grid>
    );
  });
  return (
    <Box>
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        padding='3%'
        textAlign='center'
        // sx={{ margin: "100px 0px 50px 0px" }}
      >
        Professional Training Offerings
      </Typography>
      <Grid
        container
        sx={{
          padding: "0px 16px",
        }}
      >
        {renderGrids}
      </Grid>
    </Box>
  );
}
