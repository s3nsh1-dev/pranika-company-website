import React from "react";
import WhatAppTextButton from "../../common/WhatAppTextButton";
import { Box, Typography } from "@mui/material";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};
const textStyle = {
  padding: "10px",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#25D366",
  textAlign: "center",
};
export default function FastCommunicationWithWhatsApp() {
  return (
    <Box sx={container}>
      <Typography sx={textStyle}>
        Want fast and private communication ?
      </Typography>
      <WhatAppTextButton text='Connect with us on WhatApp Messenger' />
    </Box>
  );
}