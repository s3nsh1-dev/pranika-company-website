import React, { useState } from "react";
import { Toolbar, Button, Box, Menu, MenuItem, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Outlet, Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "10px",
    boxShadow: "none",
    borderRadius: "0px 0px 10px 10px",
    // width: "200px", // Adjust the width here
    // height: "auto", // Adjust the height here if needed
  },
}));

const StyledSubMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "-10px",
    boxShadow: "none",
    borderRadius: "0px 0px 10px 0px",
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElWhy, setAnchorElWhy] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const profileMenuOpen = Boolean(profileMenuAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileMenuAnchorEl(null);
  };

  const handleProfileMenuClick = (event) => {
    event.stopPropagation(); // Prevent the main menu from closing
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  return (
    <>
      <Toolbar>
        <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
          <Link to='/home'>
            <Button variant='text' size='large' color='inherit'>
              HOME
            </Button>
          </Link>
          <Button
            variant='text'
            size='large'
            color='inherit'
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Services <KeyboardArrowDownIcon />
          </Button>
          <StyledMenu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              aria-controls={profileMenuOpen ? "profile-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={profileMenuOpen ? "true" : undefined}
              onClick={handleProfileMenuClick}
            >
              IT SERVICES <KeyboardArrowRightIcon />
            </MenuItem>
            <StyledSubMenu
              id='profile-menu'
              anchorEl={profileMenuAnchorEl}
              open={profileMenuOpen}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              getContentAnchorEl={null} // Prevents the menu from shifting vertically
            >
              <MenuItem onClick={handleProfileMenuClose}>
                TRAINING & PLACEMENT PROGRAM
              </MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>
                CONSULTANCY & RECRUITMENT
              </MenuItem>
            </StyledSubMenu>
            <MenuItem onClick={handleClose}>DATA ANALYTICS</MenuItem>
            <MenuItem onClick={handleClose}>DATA TRANSFORMATION</MenuItem>
            <MenuItem onClick={handleClose}>DATA OPERATIONS</MenuItem>
          </StyledMenu>
          <Link to='/mission&vision'>
            <Button variant='text' size='large' color='inherit'>
              MISSION & VISION
            </Button>
          </Link>
          <Link to='/comingsoon'>
            <Button variant='text' size='large' color='inherit'>
              CAREERS
            </Button>
          </Link>
          <Button
            aria-controls={Boolean(anchorElWhy) ? "why-us" : undefined}
            aria-haspopup='true'
            aria-expanded={Boolean(anchorElWhy) ? "true" : undefined}
            disableElevation
            variant='text'
            size='large'
            color='inherit'
            onClick={(event) => setAnchorElWhy(event.currentTarget)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            KNOW US
          </Button>
          <StyledMenu
            id='who-menu'
            anchorEl={anchorElWhy}
            open={Boolean(anchorElWhy)}
            onClose={() => setAnchorElWhy(null)}
          >
            <Link to='/teamsummary'>
              <MenuItem onClick={() => setAnchorElWhy(null)}>
                OUR DREAM TEAM
              </MenuItem>
            </Link>
            <Link to='/about'>
              <MenuItem onClick={() => setAnchorElWhy(null)}>
                COMPANY INSIGHTS
              </MenuItem>
            </Link>
          </StyledMenu>
          <Link to='/contact'>
            <Button variant='text' size='large' color='inherit'>
              CONTACT US
            </Button>
          </Link>
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
