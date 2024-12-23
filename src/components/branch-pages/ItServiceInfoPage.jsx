import { Typography, Box, Button, Grid } from "@mui/material";
import React from "react";
import { serviceDetails } from "../../constants/MissionAndVisionContants";

export default function ItServiceInfoPage() {
  const renderServices = serviceDetails.map((info) => {
    return (
      <Grid
        item
        xs={12}
        md={6}
        key={info.id}
        padding={2}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          variant='outlined'
          sx={{
            height: "40px",
            fontSize: "25px",
            border: "2px solid",
            borderRadius: "50%",
            color: info.color,
          }}
        >
          {info.point}
        </Button>
        <Box sx={{ padding: "0px 10px" }}>
          <Typography variant='h6' fontWeight='bold'>
            {info.heading}
          </Typography>
          <Typography textAlign='justify'>{info.details}</Typography>
        </Box>
      </Grid>
    );
  });

  return (
    <Box>
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        padding='3%'
        textAlign='center'
      >
        IT Services
      </Typography>
      <Grid container columns={12}>
        {renderServices}
      </Grid>
    </Box>
  );
}
