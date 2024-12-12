import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const NavbarSmallScreen = () => {
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
      <Drawer
        anchor='left'
        open={drawerOptions.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Box
              component={Link}
              to='/home'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Home' />
              </ListItem>
            </Box>
            <Divider component='li' />
            <ListItem button onClick={handleClickOpen("serviceDrawerOpen")}>
              <ListItemText primary='Services' />
              {Boolean(drawerOptions.serviceDrawerOpen) ? (
                <KeyboardArrowLeftIcon sx={{ color: "grey" }} />
              ) : (
                <KeyboardArrowRightIcon sx={{ color: "grey" }} />
              )}
            </ListItem>
            <Divider component='li' />
            <Box
              component={Link}
              to='/mission&vision'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Mission & Vision' />
              </ListItem>
            </Box>
            <Divider component='li' />
            <Box
              component={Link}
              to='/careers'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Careers' />
              </ListItem>
            </Box>
            <Divider component='li' />
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
                aria-controls='panel3-content'
                id='panel3-header'
              >
                Know us
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component={Link}
                  to='/about'
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary='Company insights'></ListItemText>
                  </ListItem>
                </Box>
              </AccordionDetails>
              <AccordionDetails>
                <Box
                  component={Link}
                  to='/blogs-and-posts'
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary='Blogs and Posts'></ListItemText>
                  </ListItem>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Divider component='li' />
            <Box
              component={Link}
              to='/contact'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Contact us' />
              </ListItem>
            </Box>
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
          onKeyDown={handleClickClose("serviceDrawerOpen")}
        >
          <List>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3-content'
                id='panel3-header'
              >
                It Services
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component={Link}
                  to='/data-analytics'
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary='Data Analytics'></ListItemText>
                  </ListItem>
                </Box>
                <Box
                  component={Link}
                  to='/data-transformation'
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary='Data Transformation'></ListItemText>
                  </ListItem>
                </Box>
                <Box
                  component={Link}
                  to='/data-operations'
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ListItem button>
                    <ListItemText primary='Data Operations'></ListItemText>
                  </ListItem>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Divider component='li' />
            <Box
              component={Link}
              to='/job-support-india'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Project consultation' />
              </ListItem>
            </Box>
            <Divider component='li' />
            <Box
              component={Link}
              to='/digital-marketing'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Digital Marketing' />
              </ListItem>
            </Box>
            <Box
              component={Link}
              to='/training'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Training Programs' />
              </ListItem>
            </Box>
            <Divider component='li' />
            <Box
              component={Link}
              to='/consult-recruit'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem button>
                <ListItemText primary='Consultancy & Recruitment' />
              </ListItem>
            </Box>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={handleClickClose("serviceDrawerOpen")}>
              <KeyboardBackspaceIcon sx={{ color: "#070066" }} />
              <ListItemText primary='Back to main' sx={{ color: "#070066" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavbarSmallScreen;
