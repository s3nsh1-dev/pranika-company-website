import React from "react";
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import visualizationImage from "../../images/Infographic-dataVisualization.png";

const SubTitle = styled("span")({
  fontSize: "1.2rem",
  fontWeight: "bold",
});
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

export default function ShowDataAnalyticsApplication() {
  return (
    <Grid
      container
      columns={12}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={12} md={8} sx={{ padding: "10px 3%" }}>
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
  );
}
