import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { NormButton } from "../common/Buttons";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const PageLinkButton = ({ navTo, buttonText }) => {
  return (
    <Box component={Link} to={navTo} sx={linkStyle}>
      <NormButton variant='text' size='large' color='inherit'>
        {buttonText}
      </NormButton>
    </Box>
  );
};

export default PageLinkButton;
