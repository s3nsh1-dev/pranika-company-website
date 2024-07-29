import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import dataInfoGraphic from "../../images/dataAnalytics-1.png";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import ShowServiceDataPoints from "../branch-pages/ShowServiceDataPoints";
import styled from "styled-components";
import visualizationImage from "../../images/Infographic-dataVisualization.png";
import { Height } from "@mui/icons-material";

const title = "Data Analytics";
const subtitle =
  "Sharpen your competitive edge with AI and real-time analytics";

const visualStyle = {
  // height: 700,
  width: 500,
};

export default function ShowDataAnalytics() {
  return (
    <Box>
      <ShowServiceSubTitle title={title} subtitle={subtitle} />
      <ShowServiceDataPoints />
      <Grid
        container
        columns={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={9}
          component={Typography}
          textAlign='justify'
          variant='body1'
          fontWeight='bold'
          sx={{ padding: "3%" }}
        >
          At Pranika Technologies and Consulting Pvt. Ltd., we specialize in
          delivering tailored data analytics solutions that empower businesses
          to unlock the full potential of their data. Partner with us to
          transform your data into a powerful asset that fuels your business
          growth. Explore our success stories, discover how we’ve helped other
          businesses, and see what we can do for you. Contact us today for a
          consultation and take the first step towards smarter, data-driven
          decision-making.
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <Box
            component='img'
            src={visualizationImage}
            alt='visualInfographic'
            sx={{
              maxHeight: 500,
              minHeight: 400,
              width: "100%",
              objectFit: "contain",
              padding: " 0px 10px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
