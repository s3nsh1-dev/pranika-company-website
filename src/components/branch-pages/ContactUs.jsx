import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../images/contact-us.jpg";

export default function ContactUs() {
  return (
    <Box
      sx={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
      padding={2}
    >
      <Typography variant='h2' fontWeight='bold' gutterBottom>
        JOIN US
      </Typography>
      <Typography
        variant='h5'
        component='div'
        padding={3}
        sx={{ border: "1px solid white", width: "40vw" }}
      >
        <p>
          For more information about our services or to schedule a consultation,
          please feel free to reach out to us at{" "}
          <a href='mailto:info@pranikatech.com'>info@pranikatech.com</a> or
          visit our website at&nbsp;
          <a href='https://www.pranikatech.com'>www.pranikatech.com</a>.
        </p>
        <p>
          Our team of experts is dedicated to providing tailored solutions that
          empower your business to thrive in the digital age.
        </p>
      </Typography>
    </Box>
  );
}
