import React, { useState } from "react";
import { Toolbar, Button, Box, Menu, MenuItem, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "10px",
    boxShadow: "none",
    borderRadius: "none",
    // width: "200px", // Adjust the width here
    // height: "auto", // Adjust the height here if needed
  },
}));

const StyledSubMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "-10px",
    boxShadow: "none",
    borderRadius: "none",
    // width: "200px", // Adjust the width here
    // height: "auto", // Adjust the height here if needed
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
  const [servicesMenu, setServiceMenu] = useState(null);
  const [itServicesMenu, setItServicesMenu] = useState(null);
  const [knowMeMenu, setKnowMeMenu] = useState(null);

  const isServicesOpen = Boolean(servicesMenu);
  const isItServicesMenuOpen = Boolean(itServicesMenu);
  const isKnowMeOpen = Boolean(knowMeMenu);

  const handleClickServices = (event) => {
    setServiceMenu(event.currentTarget);
  };
  const handleCloseSevices = () => {
    setServiceMenu(null);
    setItServicesMenu(null);
  };

  const handleClickItServicesMenu = (event) => {
    event.stopPropagation(); // Prevent the main menu from closing
    setItServicesMenu(event.currentTarget);
  };
  const handleCloseItServicesMenu = () => {
    setItServicesMenu(null);
  };

  const handleClickKnowMe = (event) => {
    setKnowMeMenu(event.currentTarget);
  };
  const handleCloseKnowMe = () => {
    setKnowMeMenu(null);
  };

  return (
    <>
      <Toolbar>
        <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
          <Box
            component={Link}
            to='/home'
            sx={{
              textDecoration: "none",
              color: "inherit", // or any other color you prefer
            }}
          >
            <Button variant='text' size='large' color='inherit'>
              HOME
            </Button>
          </Box>
          <Button
            variant='text'
            size='large'
            color='inherit'
            id='services-button'
            aria-controls={isServicesOpen ? "services-id" : undefined}
            aria-haspopup='true'
            aria-expanded={isServicesOpen ? "true" : undefined}
            onClick={handleClickServices}
            endIcon={
              isServicesOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            Services
          </Button>
          <StyledMenu
            id='services-id'
            anchorEl={servicesMenu}
            open={isServicesOpen}
            onClose={handleCloseSevices}
            MenuListProps={{
              "aria-labelledby": "services-button",
            }}
          >
            <MenuItem
              id='itservice-button'
              aria-controls={
                isItServicesMenuOpen ? "itservice-menu" : undefined
              }
              aria-haspopup='true'
              aria-expanded={isItServicesMenuOpen ? "true" : undefined}
              onClick={handleClickItServicesMenu}
            >
              IT SERVICES
              {isItServicesMenuOpen ? (
                <KeyboardArrowLeftIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </MenuItem>
            <StyledSubMenu
              id='itservice-menu'
              anchorEl={itServicesMenu}
              open={isItServicesMenuOpen}
              onClose={handleCloseItServicesMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              getContentAnchorEl={null} // Prevents the menu from shifting vertically
              MenuListProps={{
                "aria-labelledby": "itservice-button",
              }}
            >
              <MenuItem onClick={handleCloseItServicesMenu}>
                DATA ANALYTICS
              </MenuItem>
              <MenuItem onClick={handleCloseItServicesMenu}>
                DATA TRANSFORMATION
              </MenuItem>
              <MenuItem onClick={handleCloseItServicesMenu}>
                DATA OPERATIONS
              </MenuItem>
            </StyledSubMenu>
            <MenuItem onClick={handleCloseSevices}>
              TRAINING & PLACEMENT PROGRAM DATA
            </MenuItem>
            <MenuItem onClick={handleCloseSevices}>
              CONSULTANCY & RECRUITMENT
            </MenuItem>
          </StyledMenu>
          <Box
            component={Link}
            to='/mission&vision'
            sx={{
              textDecoration: "none",
              color: "inherit", // or any other color you prefer
            }}
          >
            <Button variant='text' size='large' color='inherit'>
              MISSION & VISION
            </Button>
          </Box>
          <Box
            component={Link}
            to='/comingsoon'
            sx={{
              textDecoration: "none",
              color: "inherit", // or any other color you prefer
            }}
          >
            <Button variant='text' size='large' color='inherit'>
              CAREERS
            </Button>
          </Box>
          <Button
            id='knowMe-button'
            aria-controls={isKnowMeOpen ? "know-me" : undefined}
            aria-haspopup='true'
            aria-expanded={isKnowMeOpen ? "true" : undefined}
            disableElevation
            variant='text'
            size='large'
            color='inherit'
            onClick={handleClickKnowMe}
            endIcon={
              isKnowMeOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          >
            KNOW US
          </Button>
          <StyledMenu
            id='know-me'
            anchorEl={knowMeMenu}
            open={isKnowMeOpen}
            onClose={handleCloseKnowMe}
          >
            <Box
              component={Link}
              to='/teamsummary'
              sx={{
                textDecoration: "none",
                color: "inherit", // or any other color you prefer
              }}
            >
              <MenuItem onClick={handleCloseKnowMe}>OUR DREAM TEAM</MenuItem>
            </Box>
            <Box
              component={Link}
              to='/about'
              sx={{
                textDecoration: "none",
                color: "inherit", // or any other color you prefer
              }}
            >
              <MenuItem onClick={handleCloseKnowMe}>COMPANY INSIGHTS</MenuItem>
            </Box>
          </StyledMenu>
          <Box
            component={Link}
            to='/contact'
            sx={{
              textDecoration: "none",
              color: "inherit", // or any other color you prefer
            }}
          >
            <Button variant='text' size='large' color='inherit'>
              CONTACT US
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
      <Outlet />
    </>
  );
}
