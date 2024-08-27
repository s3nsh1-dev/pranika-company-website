import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../../images/building-nobg.png";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import {
  coreOfPTCPL,
  aboutPranika,
} from "../../constants/AboutPranikaWebsitePageContants";
import YoutubeVideoTemplateOne from "./YoutubeVideoTemplateOne";

const link1 =
  "https://www.youtube-nocookie.com/embed/iM8PayfmzJ4?si=KSO06Fwo411tFRrV";
const link2 =
  "https://www.youtube-nocookie.com/embed/NZ45Ep_53Sk?si=qVgNBdMcAcUiKDQ3";

export default function AboutUs() {
  const renderingCoreOfPTCPL = coreOfPTCPL.map((values) => {
    return (
      <Grid item xs={12} md={4} sx={{ padding: "5px 20px" }} key={values.id}>
        <Typography variant='h6' fontWeight='bold'>
          {values.heading}
        </Typography>
        <Typography>{values.details}</Typography>
      </Grid>
    );
  });
  return (
    <>
      <SecondryNavbar />
      <Box sx={{ padding: "20px", textAlign: "justify" }}>
        <Typography
          variant='h3'
          textAlign='center'
          fontWeight='bold'
          padding={2}
        >
          Welcome to Pranika Technologies and Consulting Private Limited
        </Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={8}>
            <Typography variant='h6' padding={5}>
              {aboutPranika}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={image}
                alt='building'
                style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <YoutubeVideoTemplateOne sourceURL={link1} />
          <YoutubeVideoTemplateOne sourceURL={link2} />
        </Box>
        <Typography
          variant='h3'
          textAlign='center'
          fontWeight='bold'
          padding={6}
        >
          Core of Pranika Tech
        </Typography>
        <Grid container sx={{ paddingBottom: "30px" }}>
          {renderingCoreOfPTCPL}
        </Grid>
      </Box>
      <PrimaryFooter />
    </>
  );
}
