import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";

export default function Test() {
  const [drawerOptions, setDrawerOptions] = useState({
    drawerOpen: false,
    serviceDrawerOpen: false,
    knowMeDrawerOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOptions((prev) => ({
      ...prev,
      drawerOpen: open,
    }));
  };

  const handleClickOpen = (drawerValue) => (event) => {
    event.stopPropagation();
    setDrawerOptions((prev) => ({
      ...prev,
      [drawerValue]: true,
    }));
  };

  const handleClickClose = (drawerValue) => () => {
    setDrawerOptions((prev) => ({
      ...prev,
      [drawerValue]: false,
    }));
  };

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, display: { xs: "block", md: "none" } }} // Show only on mobile
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Company
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={drawerOptions.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button onClick={handleClickOpen("serviceDrawerOpen")}>
              <ListItemText primary='Services' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Mission & Vision' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Careers' />
            </ListItem>
            <ListItem button onClick={handleClickOpen("knowMeDrawerOpen")}>
              <ListItemText primary='Know us' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Contact us' />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Drawer
        anchor='left'
        open={drawerOptions.serviceDrawerOpen}
        onClose={handleClickClose("serviceDrawerOpen")}
        sx={{ width: 250 }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={handleClickClose("serviceDrawerOpen")}
          onKeyDown={handleClickClose("serviceDrawerOpen")}
        >
          <List>
            <ListItem button>
              <ListItemText primary='Data Analytics' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Data Transformation' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Data Operations' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              component={Button}
              onClick={handleClickClose("serviceDrawerOpen")}
            >
              <KeyboardBackspaceIcon /> Back
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Drawer
        anchor='left'
        open={drawerOptions.knowMeDrawerOpen}
        onClose={handleClickClose("knowMeDrawerOpen")}
        sx={{ width: 250 }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={handleClickClose("knowMeDrawerOpen")}
          onKeyDown={handleClickClose("knowMeDrawerOpen")}
        >
          <List>
            <ListItem button>
              <ListItemText primary='Our dream team' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Company Insights' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              component={Button}
              onClick={handleClickClose("knowMeDrawerOpen")}
            >
              <KeyboardBackspaceIcon /> Back
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
