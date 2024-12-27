import React from "react";
import { MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledMenu } from "../../navbar-components/NavbarCssVariables";

const KnowUsMenu = ({ menuState, handleMenuClose }) => {
  return (
    <StyledMenu
      id="know-me"
      anchorEl={menuState.knowMeMenu}
      open={Boolean(menuState.knowMeMenu)}
      onClose={handleMenuClose("knowMeMenu")}
    >
      {[
        { path: "/about", label: "Company insights" },
        { path: "/blogs-and-posts", label: "Blogs and Posts" },
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
          <MenuItem
            onClick={handleMenuClose("knowMeMenu")}
            sx={{ textTransform: "none" }}
          >
            {item.label}
          </MenuItem>
        </Box>
      ))}
    </StyledMenu>
  );
};

export default KnowUsMenu;
