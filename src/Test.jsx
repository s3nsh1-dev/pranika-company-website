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
import { Button } from "@mui/material";

export default function Test() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nestedDrawerOpen, setNestedDrawerOpen] = useState(false);
  const [nestedDrawerAnchor, setNestedDrawerAnchor] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLoginClick = (event) => {
    event.stopPropagation();
    setNestedDrawerAnchor(event.currentTarget);
    setNestedDrawerOpen(true);
  };

  const handleNestedDrawerClose = () => {
    setNestedDrawerOpen(false);
    setNestedDrawerAnchor(null);
  };

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          {/* Hamburger Menu Button */}
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
          {/* Desktop Buttons */}
        </Toolbar>
      </AppBar>

      {/* Main Drawer for Mobile */}
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
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
            <ListItem button onClick={handleLoginClick}>
              <ListItemText primary='Services' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Mission & Vision' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Careers' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Know us' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Contact us' />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Nested Drawer for Login */}
      <Drawer
        anchor='left'
        open={nestedDrawerOpen}
        onClose={handleNestedDrawerClose}
        sx={{ width: 250 }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={handleNestedDrawerClose}
          onKeyDown={handleNestedDrawerClose}
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
            <ListItem components={Button} onClick={handleNestedDrawerClose}>
              <KeyboardBackspaceIcon /> Back
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
