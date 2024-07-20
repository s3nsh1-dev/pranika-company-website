import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                  // src={YTlogo}
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
                  // src={LinkedInlogo}
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
                  // src={Instagramlogo}
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
                  // src={Facebooklogo}
                  alt='Facebooklogo'
                  style={{ height: "30px", width: "30px" }}
                />
              </a>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
