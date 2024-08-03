import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ShowServiceDataPoints({ image, title, contentPoints }) {
  return (
    <Box sx={{ padding: "40px 0px" }}>
      <Typography textAlign='center' variant='h5' fontWeight='bold'>
        {title}
      </Typography>
      <Grid
        container
        columns={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
        textAlign='justify'
      >
        <Grid
          item
          xs={12}
          md={4}
          component='img'
          src={image}
          alt='datainfographic'
          sx={{
            minHeight: 300,
            maxHeight: 500,
            width: "80%",
            objectFit: "contain",
          }}
        />
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            padding: "20px",
          }}
        >
          {contentPoints.map((point) => {
            return (
              <Box key={point.id} padding={1} sx={{ display: "list-item" }}>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>
                    {point.primary}&nbsp;
                  </span>
                  {point.secondary}
                </Typography>
              </Box>
            );
          })}
          <Button
            variant='outlined'
            color='success'
            sx={{
              marginTop: "20px",
              textTransform: "none",
            }}
          >
            What More We Offer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
