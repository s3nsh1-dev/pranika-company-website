import React from "react";
import { Box } from "@mui/material";
import image from "../../images/coming-soon.jpg";

const ComingSoon = () => {
  return (
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
  );
};

export default ComingSoon;
