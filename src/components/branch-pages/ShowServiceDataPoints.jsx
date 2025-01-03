import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ShowServiceDataPoints({ image, title, contentPoints }) {
  return (
    <Box>
      <Typography textAlign='center' fontWeight='bold' fontSize={"2rem"}>
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
            padding: "0px 40px",
          }}
        >
          {contentPoints.map((point) => {
            return (
              <Box key={point.id} padding={1} sx={{ display: "list-item" }}>
                <Typography fontSize={"1.2rem"}>
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
