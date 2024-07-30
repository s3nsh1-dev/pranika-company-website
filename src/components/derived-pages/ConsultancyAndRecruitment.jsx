import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ITandStrategyConultancy from "./ITandStrategyConultancy";
import RecruitmentForBuisness from "./RecruitmentForBuisness";
import "./ConsultancyAndRecruitment.css";

export default function ConsultancyAndRecruitment() {
  const buttonUI = {
    width: "100%",
    height: "300px",
    minHeight: "100%",
    textTransform: "none",
    borderRadius: "0px",
  };
  const buttonTextUI = {
    width: "100%",
    fontSize: { xs: "1.2rem", md: "2rem" },
    "&:hover": {
      animation: "vibrate-1 0.3s linear infinite both",
    },
  };
  const [show, setShow] = useState(true);
  const handleShowConsultancy = () => {
    setShow(true);
  };
  const handleShowRecruitment = () => {
    setShow(false);
  };
  return (
    <Box>
      <Grid container columns={12}>
        <Grid item xs={6}>
          <Button
            sx={buttonUI}
            onClick={handleShowConsultancy}
            variant={show ? "contained" : "text"}
          >
            <Typography sx={buttonTextUI}>Consultancy</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={buttonUI}
            onClick={handleShowRecruitment}
            variant={!show ? "contained" : "text"}
          >
            <Typography sx={buttonTextUI}>Recruitment</Typography>
          </Button>
        </Grid>
      </Grid>
      {show ? <ITandStrategyConultancy /> : <RecruitmentForBuisness />}
    </Box>
  );
}
