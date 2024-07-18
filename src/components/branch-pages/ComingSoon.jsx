import React from "react";
import { Box } from "@mui/material";
import image from "../../images/coming-soon.jpg";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";

const ComingSoon = () => {
  return (
    <>
      <SecondryNavbar />
      <Box
        sx={{
          width: "100%",
          height: "100vh", // Fills the entire viewport height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <PrimaryFooter />
    </>
  );
};

export default ComingSoon;
