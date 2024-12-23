import React, { useState } from "react";
import { Toolbar, Button, Box, MenuItem, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  StyledMenu,
  StyledSubMenu,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./NavbarCssVariables";
import PageLinkButton from "./PageLinkButton";
import { navigationLinks } from "../../constants/NavbarConstants";

const buttonCommonStyles = {
  textDecoration: "none",
  color: "inherit",
};

const NavbarFullscreen = () => {
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

  return (
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
        <PageLinkButton
          navTo={navigationLinks.home.navTo}
          buttonText={navigationLinks.home.text}
        />
        <Button
          variant='text'
          size='large'
          color='inherit'
          id='services-button'
          aria-controls={
            Boolean(menuState.servicesMenu) ? "serviceId" : undefined
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
          id='serviceId'
          anchorEl={menuState.servicesMenu}
          open={Boolean(menuState.servicesMenu)}
          onClose={handleMenuClose("servicesMenu")}
          MenuListProps={{
            "aria-labelledby": "services-button",
          }}
        >
          <MenuItem
            id='itServiceMutton'
            aria-controls={
              Boolean(menuState.itServicesMenu) ? "itServiceMenu" : undefined
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
            id='itServiceMenu'
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
              "aria-labelledby": "itServiceMutton",
            }}
          >
            <Box
              component={Link}
              to={
                navigationLinks.services.itServicesLinks[0].dataAnalytics.navTo
              }
              sx={buttonCommonStyles}
            >
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                {navigationLinks.services.itServicesLinks[0].dataAnalytics.text}
              </MenuItem>
            </Box>
            <Box
              component={Link}
              to={
                navigationLinks.services.itServicesLinks[1].dataTransformation
                  .navTo
              }
              sx={buttonCommonStyles}
            >
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                {
                  navigationLinks.services.itServicesLinks[1].dataTransformation
                    .text
                }
              </MenuItem>
            </Box>
            <Box
              component={Link}
              to={
                navigationLinks.services.itServicesLinks[2].dataOperations.navTo
              }
              sx={buttonCommonStyles}
            >
              <MenuItem onClick={handleMenuClose("itServicesMenu")}>
                {
                  navigationLinks.services.itServicesLinks[2].dataOperations
                    .text
                }
              </MenuItem>
            </Box>
          </StyledSubMenu>
          <Box
            component={Link}
            to={navigationLinks.services.commonServices[0].jobSupport.navTo}
            sx={buttonCommonStyles}
          >
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              {navigationLinks.services.commonServices[0].jobSupport.text}
            </MenuItem>
          </Box>
          <Box
            component={Link}
            to={
              navigationLinks.services.commonServices[1].digitalMarketing.navTo
            }
            sx={buttonCommonStyles}
          >
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              {navigationLinks.services.commonServices[1].digitalMarketing.text}
            </MenuItem>
          </Box>
          <Box
            component={Link}
            to={navigationLinks.services.commonServices[2].training.navTo}
            sx={buttonCommonStyles}
          >
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              {navigationLinks.services.commonServices[2].training.text}
            </MenuItem>
          </Box>
          <Box
            component={Link}
            to={navigationLinks.services.commonServices[3].consultRecruit.navTo}
            sx={buttonCommonStyles}
          >
            <MenuItem onClick={handleMenuClose("servicesMenu")}>
              {navigationLinks.services.commonServices[3].consultRecruit.text}
            </MenuItem>
          </Box>
        </StyledMenu>
        <PageLinkButton
          navTo={navigationLinks.missionVision.navTo}
          buttonText={navigationLinks.missionVision.text}
        />
        <PageLinkButton
          navTo={navigationLinks.careers.navTo}
          buttonText={navigationLinks.careers.text}
        />
        <Button
          id='knowMe-button'
          aria-controls={Boolean(menuState.knowMeMenu) ? "know-me" : undefined}
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
            to={navigationLinks.knowUs[0].about.navTo}
            sx={buttonCommonStyles}
          >
            <MenuItem
              onClick={handleMenuClose("knowMeMenu")}
              sx={{ textTransform: "none" }}
            >
              {navigationLinks.knowUs[0].about.text}
            </MenuItem>
          </Box>
          <Box
            component={Link}
            to={navigationLinks.knowUs[1].blogPost.navTo}
            sx={buttonCommonStyles}
          >
            <MenuItem
              onClick={handleMenuClose("blogAndPosts")}
              sx={{ textTransform: "none" }}
            >
              {navigationLinks.knowUs[1].blogPost.text}
            </MenuItem>
          </Box>
        </StyledMenu>
        <PageLinkButton
          navTo={navigationLinks.contact.navTo}
          buttonText={navigationLinks.contact.text}
        />
        <PageLinkButton
          navTo={navigationLinks.portfolio.navTo}
          buttonText={navigationLinks.portfolio.text}
        />
      </Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ "aria-label": "search" }}
          disabled
        />
      </Search>
    </Toolbar>
  );
};

export default NavbarFullscreen;
