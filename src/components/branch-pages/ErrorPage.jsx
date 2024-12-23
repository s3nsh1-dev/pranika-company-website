import React from "react";
import { Box } from "@mui/material";
import image from "../../images/error-page-image.png";
import PrimaryFooter from "../home-page/PrimaryFooter";
import SecondryNavbar from "../home-page/SecondryNavbar";

const ErrorPage = () => {
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

export default ErrorPage;
