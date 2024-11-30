import React from "react";
import { Box, Button } from "@mui/material";

const styledContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  border: "2px solid black",
  width: "20%",
};
const BlogDrawer = () => {
  return (
    <Box sx={styledContainer}>
      <Button>Data Science & Business Analytics</Button>
      <Button>AI & Machine Learning & Gen AI</Button>
      <Button>Cloud Computing</Button>
      <Button>DevOps & SRE (Site Reliability Engineering)</Button>
      <Button>Software Development</Button>
      <Button sx={{ textAlign: "start" }}>
        IT Service Management & Enterprise Architecture
      </Button>
      <Button>Digital Marketing & Growth Hacking</Button>
      <Button>Big Data and advance analytics</Button>
      <Button>Career Fast-track & Professional Upskilling</Button>
    </Box>
  );
};

export default BlogDrawer;
