import React from "react";
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import visualizationImage from "../../images/Infographic-dataVisualization.png";
import {
  industry,
  selling,
  callToAction,
} from "../../constants/DataAnalyticsPageContants";

const SubTitle = styled("span")({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

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
