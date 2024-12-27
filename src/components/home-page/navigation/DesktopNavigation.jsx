import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ServicesMenu from "./ServicesMenu";
import KnowUsMenu from "./KnowUsMenu";

const DesktopNavigation = () => {
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

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/mission&vision", label: "Mission and Vision" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact us" },
    { path: "/portfolio", label: "Portfolio" },
  ];

  return (
    <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
      {navItems.map((item, index) => (
        <Box
          key={item.path}
          component={Link}
          to={item.path}
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Button
            variant="text"
            size="large"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            {item.label}
          </Button>
        </Box>
      ))}

      <Button
        variant="text"
        size="large"
        color="inherit"
        id="services-button"
        aria-controls={Boolean(menuState.servicesMenu) ? "services-id" : undefined}
        aria-haspopup="true"
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

      <Button
        id="knowMe-button"
        aria-controls={Boolean(menuState.knowMeMenu) ? "know-me" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(menuState.knowMeMenu) ? "true" : undefined}
        disableElevation
        sx={{ textTransform: "none" }}
        variant="text"
        size="large"
        color="inherit"
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

      <ServicesMenu
        menuState={menuState}
        handleMenuClick={handleMenuClick}
        handleMenuClose={handleMenuClose}
      />
      <KnowUsMenu
        menuState={menuState}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
};

export default DesktopNavigation;
