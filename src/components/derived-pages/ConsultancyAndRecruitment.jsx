import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ITandStrategyConultancy from "./ITandStrategyConultancy";
import RecruitmentForBuisness from "./RecruitmentForBuisness";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import "./ConsultancyAndRecruitment.css";

export default function ConsultancyAndRecruitment() {
  const [show, setShow] = useState(true);
  const [pageInfo, setPageInfo] = useState("consult");
  const handleShowConsultancy = () => {
    setShow(true);
    setPageInfo("consult");
  };
  const handleShowRecruitment = () => {
    setShow(false);
    setPageInfo("recruit");
  };
  const buttonConsultUI = {
    backgroundColor: pageInfo === "consult" ? "#070066" : "white",
    color: pageInfo === "consult" ? "white" : "#070066",
    width: "100%",
    height: "150px",
    textTransform: "none",
    borderRadius: "0px",
    "&:hover": {
      color: "#070066",
    },
  };
  const buttonRecruitUI = {
    backgroundColor: pageInfo === "recruit" ? "#070066" : "white",
    color: pageInfo === "recruit" ? "white" : "#070066",
    width: "100%",
    height: "150px",
    textTransform: "none",
    borderRadius: "0px",
    "&:hover": {
      color: "#070066",
    },
  };
  const buttonTextUI = {
    width: "100%",
    fontSize: { xs: "1.2rem", md: "2rem" },
    "&:hover": {
      animation: "vibrate-1 0.3s linear infinite both",
    },
  };

  return (
    <Box>
      <SecondryNavbar />
      <Grid container columns={12}>
        <Grid item xs={6}>
          <Button
            sx={buttonConsultUI}
            onClick={handleShowConsultancy}
            variant={show ? "outlined" : "text"}
          >
            <Typography sx={buttonTextUI}>Consultancy</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={buttonRecruitUI}
            onClick={handleShowRecruitment}
            variant={!show ? "outlined" : "text"}
          >
            <Typography sx={buttonTextUI}>Recruitment</Typography>
          </Button>
        </Grid>
      </Grid>
      {show ? <ITandStrategyConultancy /> : <RecruitmentForBuisness />}
      <PrimaryFooter />
    </Box>
  );
}
