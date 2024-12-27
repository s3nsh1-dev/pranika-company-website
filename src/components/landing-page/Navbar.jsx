// import React from "react";
// import { Outlet } from "react-router-dom";
// import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
// import NavbarPrimaryContent from "./NavbarPrimaryContent";
// import NavbarSecondaryContent from "./NavbarSecondaryContent";

// export default function Navbar() {
//   const theme = useTheme();
//   const isSMScreen = useMediaQuery(theme.breakpoints.up("sm"));
//   return (
//     <>
//       <Box>
//         <AppBar
//           position='static'
//           sx={{
//             backgroundColor: "#070066",
//             margin: "0px",
//             padding: "0px",
//           }}
//         >
//           <Toolbar disableGutters>
//             <NavbarPrimaryContent />
//             {isSMScreen && <NavbarSecondaryContent />}
//           </Toolbar>
//         </AppBar>
//         <Outlet />
//       </Box>
//     </>
//   );
// }
// =======================================================================================
import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import NavbarPrimaryContent from "./NavbarPrimaryContent";
import NavbarSecondaryContent from "./NavbarSecondaryContent";

export default function Navbar() {
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Box>
        <AppBar
          position="relative"
          sx={{
            backgroundColor: "#070066",
            margin: "0px",
            padding: "0px",
            zIndex: 1000,
          }}
        >
          <Toolbar disableGutters>
            <NavbarPrimaryContent />
            {isSMScreen && <NavbarSecondaryContent />}
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </>
  );
}