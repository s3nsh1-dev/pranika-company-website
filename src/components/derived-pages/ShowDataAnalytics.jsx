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
import { styled } from "@mui/material/styles";
import visualizationImage from "../../images/Infographic-dataVisualization.png";

const SubTitle = styled("span")({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const title = "Data Analytics";
const subtitle =
  "Sharpen your competitive edge with AI and real-time analytics";

const industry = [
  {
    id: 0,
    primary: "Healthcare:",
    secondary:
      "Enhanced patient outcomes through data-driven insights and predictive models.",
  },
  {
    id: 1,
    primary: "Finance:",
    secondary:
      "mproved risk assessment and decision-making with advanced analytics.",
  },
  {
    id: 2,
    primary: "Retail:",
    secondary:
      "Boosted sales and customer engagement through targeted data analysis.",
  },
];

const selling = [
  {
    id: 0,
    primary: "Customized Solutions:",
    secondary:
      "Our tailored analytics solutions address the unique challenges and goals of each client, ensuring maximum impact.",
  },
  {
    id: 1,
    primary: "Cutting-edge Technology:",
    secondary:
      "We utilize the latest technologies such as machine learning, AI, and big data analytics to provide innovative solutions.",
  },
  {
    id: 2,
    primary: "Experienced Team:",
    secondary:
      "Our team comprises certified data analysts, data scientists, and business intelligence experts with a proven track record of success.",
  },
];

const callToAction = [
  {
    id: 69,
    title: "Call to Action (CTA)",
    content:
      "Contact us today to schedule a free consultation and discover how our data analytics solutions can transform your business. Let's unlock the potential of your data together!",
  },
];
export default function ShowDataAnalytics() {
  return (
    <Box>
      <ShowServiceSubTitle title={title} subtitle={subtitle} />
      <ShowServiceDataPoints />
      <Typography
        textAlign='justify'
        variant='body1'
        fontWeight='bold'
        sx={{ padding: "0px 3%" }}
      >
        At Pranika Technologies and Consulting Pvt. Ltd., we specialize in
        delivering tailored data analytics solutions that empower businesses to
        unlock the full potential of their data. Partner with us to transform
        your data into a powerful asset that fuels your business growth. Explore
        our success stories, discover how we’ve helped other businesses, and see
        what we can do for you. Contact us today for a consultation and take the
        first step towards smarter, data-driven decision-making.
      </Typography>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={8} sx={{ padding: "3%" }}>
          <List>
            <SubTitle>Industry Expertise</SubTitle>
            {industry.map((info) => {
              return (
                <ListItem key={info.id}>
                  <ListItemText
                    primary={info.primary}
                    secondary={info.secondary}
                  />
                </ListItem>
              );
            })}
          </List>
          <List>
            <SubTitle>Unique Selling Proposition (USP)</SubTitle>
            {selling.map((info) => {
              return (
                <ListItem key={info.id}>
                  <ListItemText
                    primary={info.primary}
                    secondary={info.secondary}
                  />
                </ListItem>
              );
            })}
          </List>
          <List>
            <SubTitle>{callToAction[0].title}</SubTitle>
            <ListItem>
              <ListItemText primary={callToAction[0].content} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component='img'
            src={visualizationImage}
            alt='visualInfographic'
            sx={{
              maxHeight: 600,
              minHeight: 400,
              width: "100%",
              objectFit: "contain",
              padding: " 0px 3%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
