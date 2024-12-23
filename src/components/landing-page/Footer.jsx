import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";

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
      <Typography
        variant='subtitle2'
        sx={{ padding: " 10px 20px" }}
        color='grey'
      >
        Pranika Technologies and Consulting Pvt. Ltd. © All Rights Reserved.
        Designed & Developed by &nbsp;
        <a
          href='https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/'
          className='no-change-link'
          target='_blank'
          style={{ color: "aqua" }}
          rel='noreferrer'
        >
          PranikaTechTeam
        </a>
      </Typography>
    </Box>
  );
}
