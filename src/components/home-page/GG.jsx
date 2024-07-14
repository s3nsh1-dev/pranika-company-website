import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    // vertical padding + font size from searchIcon
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

export default function GG() {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [anchorElWho, setAnchorElWho] = useState(null);
  const [anchorElWhy, setAnchorElWhy] = useState(null);
  const [anchorElHR, setAnchorElHR] = useState(null);
  const [anchorElMobile, setAnchorElMobile] = useState(null);

  const handleClick = (setAnchorEl) => (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (setAnchorEl) => () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar>
      <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
        <Box>
          <Button
            aria-controls={Boolean(anchorElWho) ? "who-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={Boolean(anchorElWho) ? "true" : undefined}
            disableElevation
            variant='text'
            edge='start'
            aria-label='menu'
            size='large'
            color='inherit'
            onClick={handleClick(setAnchorElWho)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            WHO WE ARE
          </Button>
          <Menu
            id='who-menu'
            anchorEl={anchorElWho}
            open={Boolean(anchorElWho)}
            onClose={handleClose(setAnchorElWho)}
          >
            <MenuItem onClick={handleClose}>WHO WE ARE</MenuItem>
            <MenuItem onClick={handleClose}>WHAT WE DO</MenuItem>
            <MenuItem onClick={handleClose}>OUR EXPERTISE</MenuItem>
            <MenuItem onClick={handleClose}>MEET OUT TEAM</MenuItem>
            <MenuItem onClick={handleClose}>OUR GLOBAL FOOTPRINT</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Button
            aria-controls={Boolean(anchorElWhy) ? "who-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={Boolean(anchorElWhy) ? "true" : undefined}
            disableElevation
            variant='text'
            edge='start'
            aria-label='menu'
            size='large'
            color='inherit'
            onClick={handleClick(setAnchorElWhy)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            WHY CHOOSE US
          </Button>
          <Menu
            id='who-menu'
            anchorEl={anchorElWhy}
            open={Boolean(anchorElWhy)}
            onClose={handleClose(setAnchorElWhy)}
          >
            <MenuItem onClick={handleClose}>WHY CHOOSE US</MenuItem>
            <MenuItem onClick={handleClose}>OUR HIRING METHODOLOGY</MenuItem>
            <MenuItem onClick={handleClose}>MANDATE ASSESSMENT TOOL</MenuItem>
            <MenuItem onClick={handleClose}>DIVERSITY PRACTICE</MenuItem>
            <MenuItem onClick={handleClose}>COST ADVANTAGE</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Button variant='text' edge='start' size='large' color='inherit'>
            CASE STUDIES
          </Button>
        </Box>
        <Box>
          <Button
            aria-controls={Boolean(anchorElHR) ? "who-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={Boolean(anchorElHR) ? "true" : undefined}
            disableElevation
            variant='text'
            edge='start'
            aria-label='menu'
            size='large'
            color='inherit'
            onClick={handleClick(setAnchorElHR)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            HR INITIATIVES
          </Button>
          <Menu
            id='who-menu'
            anchorEl={anchorElHR}
            open={Boolean(anchorElHR)}
            onClose={handleClose(setAnchorElHR)}
          >
            <MenuItem onClick={handleClose}>TALENT DEVELOPMENT</MenuItem>
            <MenuItem onClick={handleClose}>JOIN OUR TEAM</MenuItem>
            <MenuItem onClick={handleClose}>BLOG</MenuItem>
            <MenuItem onClick={handleClose}>EVENTS</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Button variant='text' edge='start' size='large' color='inherit'>
            CONTACT US
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          aria-controls={Boolean(anchorElMobile) ? "who-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={Boolean(anchorElMobile) ? "true" : undefined}
          disableElevation
          variant='text'
          edge='start'
          aria-label='menu'
          size='large'
          color='inherit'
          onClick={handleClick(setAnchorElMobile)}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='who-menu'
          anchorEl={anchorElMobile}
          open={Boolean(anchorElMobile)}
          onClose={handleClose(setAnchorElMobile)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuItem onClick={handleClose}>HOME</MenuItem>
          <MenuItem onClick={handleClose}>WHO WE ARE</MenuItem>
          <MenuItem onClick={handleClose}>WHY CHOOSE US</MenuItem>
          <MenuItem onClick={handleClose}>CASE STUDIES</MenuItem>
          <MenuItem onClick={handleClose}>HR INITIATIVES</MenuItem>
          <MenuItem onClick={handleClose}>CONTACT US</MenuItem>
        </Menu>
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
  );
}
