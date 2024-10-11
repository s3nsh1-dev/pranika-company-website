import React from "react";
import { Box } from "@mui/material";
import image from "../../../images/icons/whatsapp-chat.png";
import "./proj.css";

const style = {
  position: "fixed",
  bottom: "20px",
  right: "30px",
};

export default function StickyWhatAppLogo() {
  return (
    <Box sx={style}>
      <Box
        component='a'
        href='https://wa.me/919151391112?text=Hello%2C%20I%20am%20interested%20in%20your%20services'
        target='_blank'
      >
        <Box component='img' src={image} className='jello-horizontal' />
      </Box>
    </Box>
  );
}
