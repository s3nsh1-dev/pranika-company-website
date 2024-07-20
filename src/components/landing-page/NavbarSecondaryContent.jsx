import React from "react";
import YTlogo from "../../images/yt-icon.png";
import LinkedInlogo from "../../images/linkedin-icon.png";
import Facebooklogo from "../../images/facebook-icon.png";
import Instagramlogo from "../../images/instagram-icon.png";
import { Box, Typography, Divider, IconButton } from "@mui/material";

const socialMediaIcons = [
  {
    id: 0,
    url: "https://www.youtube.com/@PranikaTech",
    image: YTlogo,
    alt: "YouTube",
  },
  {
    id: 1,
    url: "https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/",
    image: LinkedInlogo,
    alt: "LinkedIn",
  },
  {
    id: 2,
    url: "https://www.instagram.com/pranikatech/",
    image: Instagramlogo,
    alt: "Instagram",
  },
  {
    id: 3,
    url: "https://www.facebook.com/profile.php?id=61560039377656",
    image: Facebooklogo,
    alt: "Facebook",
  },
];

export default function NavbarSecondaryContent() {
  const renderingSocialMediaIcons = socialMediaIcons.map((socialMedia) => {
    return (
      <>
        <IconButton
          key={socialMedia.id}
          sx={{
            padding: "0px",
          }}
        >
          <Box
            component={`a`}
            href={socialMedia.url}
            target='_blank'
            rel='noreferrer'
            sx={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <img
              src={socialMedia.image}
              alt={socialMedia.alt}
              style={{ height: "35px", width: "35px" }}
            />
          </Box>
        </IconButton>
      </>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        padding={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Typography
          textOverflow='ellipsis'
          sx={{ fontSize: "0.8em", textAlign: "end" }}
        >
          WANT TO COLLABORATE ? CALL US
        </Typography>
        <Typography sx={{ fontSize: "0.7em", textAlign: "end" }}>
          (+91) 9151391112
        </Typography>
      </Box>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        sx={{
          display: "flex",
          border: "1px solid grey",
        }}
      />
      <Box
        padding={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "center",
          // textAlign: "center",
        }}
      >
        {/* <Typography variant='subtitle2'>Follow Us:</Typography> */}
        {renderingSocialMediaIcons}
      </Box>
    </Box>
  );
}
