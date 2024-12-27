import React from "react";
import { MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { StyledMenu, StyledSubMenu } from "../../navbar-components/NavbarCssVariables";

const ServicesMenu = ({ menuState, handleMenuClick, handleMenuClose }) => {
  return (
    <StyledMenu
      id="services-id"
      anchorEl={menuState.servicesMenu}
      open={Boolean(menuState.servicesMenu)}
      onClose={handleMenuClose("servicesMenu")}
      MenuListProps={{
        "aria-labelledby": "services-button",
      }}
    >
      <MenuItem
        id="itservice-button"
        aria-controls={Boolean(menuState.itServicesMenu) ? "itservice-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(menuState.itServicesMenu) ? "true" : undefined}
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
        id="itservice-menu"
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
        MenuListProps={{
          "aria-labelledby": "itservice-button",
        }}
      >
        {[
          { path: "/data-analytics", label: "Data Analytics" },
          { path: "/data-transformation", label: "Data Transformation" },
          { path: "/data-operations", label: "Data Operations" },
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
            <MenuItem onClick={handleMenuClose("itServicesMenu")}>
              {item.label}
            </MenuItem>
          </Box>
        ))}
      </StyledSubMenu>
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
          <MenuItem onClick={handleMenuClose("servicesMenu")}>
            {item.label}
          </MenuItem>
        </Box>
      ))}
    </StyledMenu>
  );
};

export default ServicesMenu;
