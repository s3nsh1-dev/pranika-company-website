import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "10px",
    boxShadow: "none",
  },
}));

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <StyledMenu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            width: "250px", // Adjust the width here
            height: "auto", // Adjust the height here if needed
          },
        }}
      >
        <MenuItem
          aria-controls={profileMenuOpen ? "profile-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={profileMenuOpen ? "true" : undefined}
          onClick={handleProfileMenuClick}
        >
          Profile
        </MenuItem>
        <StyledMenu
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
          PaperProps={{
            sx: {
              width: "250px", // Adjust the width here
              height: "auto", // Adjust the height here if needed
            },
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}>Employee</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Client</MenuItem>
        </StyledMenu>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </StyledMenu>
    </div>
  );
};

export default BasicMenu;

// =========================================

// import React, { useState } from "react";
// import {
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import { IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import MouseOverPopover from "./MouseOverPopover";

// const StyledMenu = styled(Menu)(({ theme }) => ({
//   "& .MuiPaper-root": {
//     marginTop: "10px",
//     boxShadow: "none",
//     borderRadius: " 0px 0px 10px 10px",
//     // width: "200px", // Adjust the width here
//     // height: "300px", // Adjust the height here if needed
//   },
// }));

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// export default function AffixBar() {
//   const [anchorElWho, setAnchorElWho] = useState(null);
//   const [anchorElWhy, setAnchorElWhy] = useState(null);
//   const [anchorItServices, setAnchorItServices] = useState(null);
//   const [anchorElMobile, setAnchorElMobile] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);
//   const profileMenuOpen = Boolean(profileMenuAnchorEl);
// const handleClick = (setAnchorEl) => (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = (setAnchorEl) => () => {
//   setAnchorEl(null);
// };
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setProfileMenuAnchorEl(null);
//   };

//   const handleProfileMenuClick = (event) => {
//     event.stopPropagation(); // Prevent the main menu from closing
//     setProfileMenuAnchorEl(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setProfileMenuAnchorEl(null);
//   };
//   return (
//     <Toolbar>
//       <Box sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}>
//         <Box>
//           <Button variant='text' edge='start' size='large' color='inherit'>
//             HOME
//           </Button>
//         </Box>
//         <div>
//           <Button
//             id='basic-button'
//             aria-controls={open ? "basic-menu" : undefined}
//             aria-haspopup='true'
//             aria-expanded={open ? "true" : undefined}
//             onClick={handleClick}
//           >
//             Dashboard
//           </Button>
//           <StyledMenu
//             id='basic-menu'
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               "aria-labelledby": "basic-button",
//             }}
//             PaperProps={{
//               sx: {
//                 width: "250px", // Adjust the width here
//                 height: "auto", // Adjust the height here if needed
//               },
//             }}
//           >
//             <MenuItem
//               aria-controls={profileMenuOpen ? "profile-menu" : undefined}
//               aria-haspopup='true'
//               aria-expanded={profileMenuOpen ? "true" : undefined}
//               onClick={handleProfileMenuClick}
//             >
//               Profile
//             </MenuItem>
//             <StyledMenu
//               id='profile-menu'
//               anchorEl={profileMenuAnchorEl}
//               open={profileMenuOpen}
//               onClose={handleProfileMenuClose}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               getContentAnchorEl={null} // Prevents the menu from shifting vertically
//               PaperProps={{
//                 sx: {
//                   width: "250px", // Adjust the width here
//                   height: "auto", // Adjust the height here if needed
//                 },
//               }}
//             >
//               <MenuItem onClick={handleProfileMenuClose}>Employee</MenuItem>
//               <MenuItem onClick={handleProfileMenuClose}>Client</MenuItem>
//             </StyledMenu>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </StyledMenu>
//         </div>
//         <Box>
//           <Button
//             aria-controls={Boolean(anchorElWho) ? "who-menu" : undefined}
//             aria-haspopup='true'
//             aria-expanded={Boolean(anchorElWho) ? "true" : undefined}
//             disableElevation
//             variant='text'
//             edge='start'
//             aria-label='menu'
//             size='large'
//             color='inherit'
//             onClick={handleClick(setAnchorElWho)}
//             endIcon={<KeyboardArrowDownIcon />}
//           >
//             Services
//           </Button>
//           <StyledMenu
//             id='who-menu'
//             anchorEl={anchorElWho}
//             open={Boolean(anchorElWho)}
//             onClose={handleClose(setAnchorElWho)}
//           >
//             <MenuItem onClick={handleClose}>
//               {/* <Box> */}
//               <Typography
//                 aria-controls={
//                   Boolean(anchorItServices) ? "it-services" : undefined
//                 }
//                 aria-haspopup='true'
//                 aria-expanded={Boolean(anchorItServices) ? "true" : undefined}
//                 disableElevation
//                 variant='text'
//                 edge='start'
//                 aria-label='menu'
//                 size='large'
//                 color='inherit'
//                 onClick={handleClick(setAnchorItServices)}
//                 endIcon={<KeyboardArrowDownIcon />}
//               >
//                 IT SERVICES
//               </Typography>
//               <Menu
//                 id='it-services'
//                 anchorEl={anchorItServices}
//                 open={Boolean(anchorItServices)}
//                 onClose={handleClose(setAnchorItServices)}
//               >
//                 <MenuItem onClick={handleClose}>
//                   TRAINING AND PLACEMENTS
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                   CONSULTANCY & RECRUITMENT
//                 </MenuItem>
//               </Menu>
//               {/* </Box> */}
//             </MenuItem>
//             <MenuItem onClick={handleClose}>DATA ANALYTICS</MenuItem>
//             <MenuItem onClick={handleClose}>DATA TRANSFORMATION</MenuItem>
//             <MenuItem onClick={handleClose}>DATA OPERATIONS</MenuItem>
//             <MenuItem onClick={handleClose}>--EXTRA--</MenuItem>
//           </StyledMenu>
//         </Box>
//         <Box>
//           <Button variant='text' edge='start' size='large' color='inherit'>
//             MISSION & VISION
//           </Button>
//         </Box>
// <Box>
//   <Button
//     aria-controls={Boolean(anchorElWhy) ? "why-us" : undefined}
//     aria-haspopup='true'
//     aria-expanded={Boolean(anchorElWhy) ? "true" : undefined}
//     disableElevation
//     variant='text'
//     edge='start'
//     aria-label='menu'
//     size='large'
//     color='inherit'
//     onClick={handleClick(setAnchorElWhy)}
//     endIcon={<KeyboardArrowDownIcon />}
//   >
//     KNOW US
//   </Button>
//   <StyledMenu
//     id='who-menu'
//     anchorEl={anchorElWhy}
//     open={Boolean(anchorElWhy)}
//     onClose={handleClose(setAnchorElWhy)}
//   >
//     <MenuItem onClick={handleClose}>OUR DREAM TEAM</MenuItem>
//     <MenuItem onClick={handleClose}>COMPANY INSIGHTS</MenuItem>
//   </StyledMenu>
// </Box>
// <Box>
//   <Button variant='text' edge='start' size='large' color='inherit'>
//     CAREERS
//   </Button>
// </Box>
// <Box>
//   <Button variant='text' edge='start' size='large' color='inherit'>
//     CONTACT US
//   </Button>
// </Box>
//         <MouseOverPopover />
//       </Box>
//       {/* ======================================================================== */}
//       <Box sx={{ display: { xs: "flex", md: "none" } }}>
//         <IconButton
//           aria-controls={Boolean(anchorElMobile) ? "who-menu" : undefined}
//           aria-haspopup='true'
//           aria-expanded={Boolean(anchorElMobile) ? "true" : undefined}
//           disableElevation
//           variant='text'
//           edge='start'
//           aria-label='menu'
//           size='large'
//           color='inherit'
//           onClick={handleClick(setAnchorElMobile)}
//           endIcon={<KeyboardArrowDownIcon />}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id='who-menu'
//           anchorEl={anchorElMobile}
//           open={Boolean(anchorElMobile)}
//           onClose={handleClose(setAnchorElMobile)}
//           sx={{ display: { xs: "flex", md: "none" } }}
//         >
//           <MenuItem onClick={handleClose}>HOME</MenuItem>
//           <MenuItem onClick={handleClose}>WHO WE ARE</MenuItem>
//           <MenuItem onClick={handleClose}>WHY CHOOSE US</MenuItem>
//           <MenuItem onClick={handleClose}>CASE STUDIES</MenuItem>
//           <MenuItem onClick={handleClose}>HR INITIATIVES</MenuItem>
//           <MenuItem onClick={handleClose}>CONTACT US</MenuItem>
//         </Menu>
//       </Box>
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder='Search…'
//           inputProps={{ "aria-label": "search" }}
//         />
//       </Search>
//     </Toolbar>
//   );
// }
