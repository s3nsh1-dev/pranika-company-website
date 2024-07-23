import React, { useState } from "react";
import {
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import AffixbarMobileDrawer from "./AffixbarMobileDrawer";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "10px",
    boxShadow: "none",
    borderRadius: "none",
  },
}));

const StyledSubMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "-10px",
    boxShadow: "none",
    borderRadius: "none",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AffixBar() {
  const [menuState, setMenuState] = useState({
    servicesMenu: null,
    itServicesMenu: null,
    knowMeMenu: null,
  });

  const handleMenuClick = (menu) => (event) => {
    event.stopPropagation();
    setMenuState((prev) => ({
      ...prev,
      [menu]: event.currentTarget,
    }));
  };

  const handleMenuClose = (menu) => () => {
    setMenuState((prev) => ({
      ...prev,
      [menu]: null,
    }));
  };

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
    <>
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
        <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
          <Box
            component={Link}
            to='/home'
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              variant='text'
              size='large'
              color='inherit'
              sx={{ textTransform: "none" }}
            >
              Home
            </Button>
          </Box>
          <Button
            variant='text'
            size='large'
            color='inherit'
            id='services-button'
            aria-controls={
              Boolean(menuState.servicesMenu) ? "services-id" : undefined
            }
            aria-haspopup='true'
            aria-expanded={Boolean(menuState.servicesMenu) ? "true" : undefined}
            onClick={handleMenuClick("servicesMenu")}
            endIcon={
              Boolean(menuState.servicesMenu) ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
            sx={{ textTransform: "none" }}
          >
            Services
          </Button>
          <StyledMenu
            id='services-id'
            anchorEl={menuState.servicesMenu}
            open={Boolean(menuState.servicesMenu)}
            onClose={handleMenuClose("servicesMenu")}
            MenuListProps={{
              "aria-labelledby": "services-button",
            }}
          >
            <MenuItem
              id='itservice-button'
              aria-controls={
                Boolean(menuState.itServicesMenu) ? "itservice-menu" : undefined
              }
              aria-haspopup='true'
              aria-expanded={
                Boolean(menuState.itServicesMenu) ? "true" : undefined
              }
              onClick={handleMenuClick("itServicesMenu")}
            >
              IT Services
              {Boolean(menuState.itServicesMenu) ? (
                <KeyboardArrowLeftIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </MenuItem>
            <StyledSubMenu
              id='itservice-menu'
              anchorEl={menuState.itServicesMenu}
              open={Boolean(menuState.itServicesMenu)}
              onClose={handleMenuClose("itServicesMenu")}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              getContentAnchorEl={null}
              MenuListProps={{
                "aria-labelledby": "itservice-button",
              }}
            >
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                Data Analytics
              </MenuItem>
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                Data Transformation
              </MenuItem>
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                Data Operations
              </MenuItem>
            </StyledSubMenu>
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              Training & Placement Programs
            </MenuItem>
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              Consultancy & Recruitment
            </MenuItem>
          </StyledMenu>
          <Box
            component={Link}
            to='/mission&vision'
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              variant='text'
              size='large'
              color='inherit'
              sx={{ textTransform: "none" }}
            >
              Mission and Vision
            </Button>
          </Box>
          <Box
            component={Link}
            to='/comingsoon'
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              variant='text'
              size='large'
              color='inherit'
              sx={{ textTransform: "none" }}
            >
              Careers
            </Button>
          </Box>
          <Button
            id='knowMe-button'
            aria-controls={
              Boolean(menuState.knowMeMenu) ? "know-me" : undefined
            }
            aria-haspopup='true'
            aria-expanded={Boolean(menuState.knowMeMenu) ? "true" : undefined}
            disableElevation
            sx={{ textTransform: "none" }}
            variant='text'
            size='large'
            color='inherit'
            onClick={handleMenuClick("knowMeMenu")}
            endIcon={
              Boolean(menuState.knowMeMenu) ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            Know us
          </Button>
          <StyledMenu
            id='know-me'
            anchorEl={menuState.knowMeMenu}
            open={Boolean(menuState.knowMeMenu)}
            onClose={handleMenuClose("knowMeMenu")}
          >
            <Box
              component={Link}
              to='/teamsummary'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <MenuItem onClick={handleMenuClose("knowMeMenu")}>
                Our dream team
              </MenuItem>
            </Box>
            <Box
              component={Link}
              to='/about'
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <MenuItem
                onClick={handleMenuClose("knowMeMenu")}
                sx={{ textTransform: "none" }}
              >
                Company insights
              </MenuItem>
            </Box>
          </StyledMenu>
          <Box
            component={Link}
            to='/contact'
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button
              variant='text'
              size='large'
              color='inherit'
              sx={{ textTransform: "none" }}
            >
              Contact us
            </Button>
          </Box>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
      <Box>
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
      <Outlet />
    </>
  );
}
