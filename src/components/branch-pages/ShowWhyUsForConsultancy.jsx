import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function ShowWhyUsForConsultancy({ partnerUsData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { sm: "3rem", xs: "2rem" },
          marginBottom: { xs: "20px", md: "0px" },
          marginTop: "40px",
        }}
        textAlign='center'
      >
        Why Partner with Us?
      </Typography>
      <Box sx={{ margin: "0px 2%" }}>
        {partnerUsData.map((info, index) => {
          if (index % 2 === 0) {
            return (
              <Grid
                container
                key={info.id}
                sx={{
                  maxWidth: 1500,
                  margin: {
                    sm: "20px 0px",
                    xs: "20px 0px",
                    md: "0px",
                    xl: "0px",
                  },
                  display: "flex",
                  alignItems: "center",
                  // alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Grid item xs={12} md={8}>
                  <Typography variant='h5' fontWeight='bold'>
                    {info.title}
                  </Typography>
                  <Typography variant='h6'>{info.content}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Box
                    component='img'
                    src={info.image}
                    alt='ImagesIsImaging'
                    sx={{
                      width: "300px",
                      height: "300px",
                      // border: "2px solid black",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </Grid>
              </Grid>
            );
          } else {
            return (
              <Grid
                container
                key={info.id}
                sx={{
                  maxWidth: 1500,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={4}>
                  <Box
                    component='img'
                    src={info.image}
                    alt='ImagesIsImaging'
                    sx={{
                      width: "300px",
                      height: "300px",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant='h5' fontWeight='bold'>
                    {info.title}
                  </Typography>
                  <Typography variant='h6'>{info.content}</Typography>
                </Grid>
              </Grid>
            );
          }
        })}
      </Box>
    </Box>
  );
}
