import React from "react";
import YTlogo from "../../images/yt-icon.png";
import LinkedInlogo from "../../images/linkedin-icon.png";
import Facebooklogo from "../../images/facebook-icon.png";
import Instagramlogo from "../../images/instagram-icon.png";
import plogo from "../../images/p-bg-less-copy.png";
import { Outlet, Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: "#070066",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Toolbar disableGutters>
          <Box
            component={Link}
            to='/'
            sx={{
              textDecoration: "none",
              color: "inherit", // or any other color you prefer
            }}
          >
            <Box sx={{ display: "flex", marginLeft: "70px" }}>
              <img
                src={plogo}
                alt='pranika-logo'
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50px",
                  margin: "0px 10px 0px 30px",
                }}
              />
              <Typography variant='h6'>
                Pranika Technologies and Consulting Pvt. Ltd.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "580px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                paddingTop: "13px",
              }}
            >
              <Typography variant='subtitle2'>
                WANT TO COLLABORATE ? CALL US
              </Typography>
              <Typography variant='subtitle2'>(+91) 9151391112</Typography>
            </Box>
            <Divider
              orientation='vertical'
              variant='middle'
              flexItem
              sx={{
                border: "1px solid grey",
                height: "25px",
                margin: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant='subtitle2'>Follow Us:</Typography>
              <a
                href='https://www.youtube.com/@PranikaTech'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={YTlogo}
                  alt='ytlogo'
                  style={{ height: "30px", width: "30px", margin: "0px 5px" }}
                />
              </a>
              <a
                href='https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={LinkedInlogo}
                  alt='LinkedInlogo'
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a
                href='https://www.instagram.com/pranikatech/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={Instagramlogo}
                  alt='Instagramlogo'
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61560039377656'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={Facebooklogo}
                  alt='Facebooklogo'
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
