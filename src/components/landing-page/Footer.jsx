import React from "react";
import { Box, Typography, Button, colors } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const useStyle = {
  Button: {
    "&:hover": {
      color: "red !important",
    },
  },
};
const useFBStyle = {
  Button: {
    "&:hover": {
      color: "blue !important",
    },
  },
};
export default function Footer() {
  return (
    <Box
      className='footer-container'
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#01014d",
        color: "white",
      }}
    >
      <Typography variant='subtitle2'>
        Pranika Technologies and Consulting Pvt. Ltd. © All Rights Reserved.
        Designed & Developed by &nbsp;
        <a
          href='https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/'
          className='no-change-link'
          target='_blank'
          style={{ color: "aqua" }}
        >
          PranikaTechTeam
        </a>
      </Typography>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <div className='yt-div' style={{ height: "10px", width: "15px" }}>
          <a
            href='https://www.youtube.com/@PranikaTech'
            className='no-change-link'
            target='_blank'
          >
            <YouTubeIcon sx={useStyle.Button} />
          </a>
        </div>
        <div
          className='yt-div'
          style={{
            height: "17px",
            width: "15px",
          }}
        >
          <a
            href='https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/'
            className='no-change-link'
            target='_blank'
          >
            <LinkedInIcon sx={useFBStyle.Button} />
          </a>
        </div>
      </Box>
    </Box>
  );
}
