import React, { useState } from "react";
import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
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

  const mainMenuItems = [
    { path: "/home", label: "Home" },
    { path: "/mission&vision", label: "Mission & Vision" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact us" },
  ];

  const knowUsItems = [
    { path: "/about", label: "Company insights" },
    { path: "/blogs-and-posts", label: "Blogs and Posts" },
  ];

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOptions.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {mainMenuItems.map((item) => (
              <React.Fragment key={item.path}>
                <Box
                  component={Link}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Box>
                <Divider component="li" />
              </React.Fragment>
            ))}

            <ListItem button onClick={handleClickOpen("serviceDrawerOpen")}>
              <ListItemText primary="Services" />
              {Boolean(drawerOptions.serviceDrawerOpen) ? (
                <KeyboardArrowLeftIcon sx={{ color: "grey" }} />
              ) : (
                <KeyboardArrowRightIcon sx={{ color: "grey" }} />
              )}
            </ListItem>
            <Divider component="li" />

            <Accordion
              elevation={0}
              sx={{
                border: "none",
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Know us
              </AccordionSummary>
              {knowUsItems.map((item) => (
                <AccordionDetails key={item.path}>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <ListItem button>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </Box>
                </AccordionDetails>
              ))}
            </Accordion>
          </List>
        </Box>
      </Drawer>

      <Drawer
        anchor="left"
        open={drawerOptions.serviceDrawerOpen}
        onClose={handleClickClose("serviceDrawerOpen")}
        sx={{ width: 250 }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={handleClickClose("serviceDrawerOpen")}
        >
          <List>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                IT Services
              </AccordionSummary>
              {[
                { path: "/data-analytics", label: "Data Analytics" },
                { path: "/data-transformation", label: "Data Transformation" },
                { path: "/data-operations", label: "Data Operations" },
              ].map((item) => (
                <AccordionDetails key={item.path}>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <ListItem button>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </Box>
                </AccordionDetails>
              ))}
            </Accordion>

            {[
              { path: "/job-support-india", label: "Project Consultation" },
              { path: "/digital-marketing", label: "Digital Marketing" },
              { path: "/training", label: "Training Programs" },
              { path: "/consult-recruit", label: "Consultancy & Recruitment" },
            ].map((item) => (
              <Box
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItem button>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
