import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../images/contact-us.jpg";
import ContactForm from "./ContactForm";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import GenericKeywords from "../derived-pages/GenericKeywords";

export default function ContactUs() {
  return (
    <>
      <GenericKeywords />
      <SecondryNavbar />
      <Box
        sx={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          padding: "2%",
          "@media (min-width: 600px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            marginBottom: "2%",
            "@media (min-width: 600px)": {
              marginRight: "2%",
              marginBottom: "0",
            },
          }}
        >
          <Typography
            variant='h4'
            fontWeight='bold'
            gutterBottom
            sx={{ textShadow: "2px 2px grey" }}
          >
            JOIN US
          </Typography>
          <Typography
            variant='h6'
            component='div'
            padding={2}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "2px solid white",
              borderRadius: "10px",
              maxWidth: "90vw",
              "@media (min-width: 600px)": {
                maxWidth: "35vw",
              },
            }}
          >
            <p>
              For more information about our services or to schedule a
              consultation, please feel free to reach out to us at{" "}
              <a href='mailto:info@pranikatech.com' style={{ color: "aqua" }}>
                info@pranikatech.com
              </a>{" "}
              or visit our website at{" "}
              <a href='https://www.pranikatech.com' style={{ color: "aqua" }}>
                www.pranikatech.com
              </a>
              .
            </p>
            <p>
              Our team of experts is dedicated to providing tailored solutions
              that empower your business to thrive in the digital age.
            </p>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", maxWidth: "500px", padding: "2%" }}>
          <ContactForm />
        </Box>
      </Box>
      <PrimaryFooter />
    </>
  );
}
