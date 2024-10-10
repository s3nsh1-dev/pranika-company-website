import React from "react";
import { Box, Button } from "@mui/material";

const style = {
  cursor: "pointer",
  border: "3px solid white",
  borderRadius: "10px",
  padding: "10px",
  textTransform: "none",
  backgroundColor: "#25D366",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "green",
  },
};
export default function WhatAppTextButton({ text }) {
  return (
    <Box
      component='a'
      href='https://wa.me/919151391112?text=Hello%2C%20I%20am%20interested%20in%20your%20services'
      target='_blank'
    >
      <Button variant='contained' color='success' sx={style}>
        {text}
      </Button>
    </Box>
  );
}
