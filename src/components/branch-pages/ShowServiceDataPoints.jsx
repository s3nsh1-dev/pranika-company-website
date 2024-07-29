import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import styled from "styled-components";
import dataInfoGraphic from "../../images/dataAnalytics-1.png";

const contentPoints = [
  {
    id: 0,
    primary: "Comprehensive Data Analysis & Interpretation:",
    secondary:
      "We help you understand complex data patterns, turning raw data into meaningful insights that drive strategic decisions.",
  },
  {
    id: 1,
    primary: "Advanced Data Visualization:",
    secondary:
      "Our visually engaging and interactive dashboards simplify complex datasets, enabling you to quickly grasp key metrics and trends.",
  },
  {
    id: 2,
    primary: "Predictive Analytics & Forecasting:",
    secondary:
      "With our predictive models, anticipate future trends and make proactive decisions to stay ahead of the competition.",
  },
  {
    id: 3,
    primary: "Data Management & Warehousing:",
    secondary:
      "We organize and secure your data, ensuring it's easily accessible and ready for analysis, while maintaining the highest standards of data integrity.",
  },
  {
    id: 4,
    primary: "Customized Business Intelligence Solutions:",
    secondary:
      "Our solutions are tailored to meet your unique business needs, providing you with actionable insights that improve operational efficiency and profitability.",
  },
];

export default function ShowServiceDataPoints() {
  return (
    <Box sx={{ padding: "40px 0px" }}>
      <Typography textAlign='center' variant='h5' fontWeight='bold'>
        Transform Your Data into Actionable Insights with Our Expertise
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
          src={dataInfoGraphic}
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
