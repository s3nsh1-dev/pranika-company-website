import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const IconArray = [
  {
    id: "1",
    tag: <FaFacebook color='white' />,
    src: "https://www.facebook.com/profile.php?id=61560039377656",
  },
  {
    id: "2",
    tag: <FaInstagram color='red' />,
    src: "https://www.instagram.com/pranikatech/",
  },
  {
    id: "3",
    tag: <FaLinkedin color='white' />,
    src: "https://www.linkedin.com/company/pranika-technologies-and-consulting-pvt-ltd/",
  },
  {
    id: "4",
    tag: <FaYoutube color='red' />,
    src: "https://www.youtube.com/@PranikaTech",
  },
];
const email = "info@pranikatech.com";
const subject = "Inquiry about your services";
const body =
  "Hello Pranika Technologies, I would like to know more about your services.";

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

export default function PrimaryFooter() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#0b0178",
          color: "white",
          padding: "40px",
          marginTop: "1px",
        }}
      >
        <Grid item xs={12} sm={4} padding={2}>
          <Typography variant='h6' fontWeight='bold'>
            Pranika Technologies
          </Typography>
          <Typography variant='subtitle2'>
            Tower - A1, Supertech Ecovillage I, Sector 1, Bisrakh, Greater
            Noida(West), India
          </Typography>
          <Typography variant='subtitle2'>
            Phone:{" "}
            <Typography
              component='a'
              href='tel:+919151391112'
              rel='noopener noreferrer'
              fontWeight='bold'
              color='aqua'
            >
              (+91) 9151391112
            </Typography>
          </Typography>
          <Typography variant='subtitle2'>
            Email:&nbsp;
            <Box
              component='a'
              href={mailtoLink}
              target='_blank'
              rel='noopener noreferrer'
              color='aqua'
            >
              info@pranikatech.com
            </Box>
          </Typography>
        </Grid>
        <Divider
          orientation='vertical'
          flexItem
          sx={{ backgroundColor: "grey" }}
        />
        <Grid item xs={12} sm={4} padding={2}>
          <Typography variant='h6' fontWeight='bold'>
            Social Links
          </Typography>
          {IconArray.map((icon) => (
            <IconButton
              key={icon.id}
              href={icon.src}
              // not using this make return to website render object <SocialMeadiaIcons/> instead of compnonet
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon.tag}
            </IconButton>
          ))}
        </Grid>
        <Divider
          orientation='vertical'
          flexItem
          sx={{ backgroundColor: "grey" }}
        />
        <Grid item xs={12} sm={3.8} padding={2}>
          <Typography variant='h6' fontWeight='bold'>
            Request a Meeting
          </Typography>
          <Typography variant='subtitle2'>
            Learn more about what Pranika Technologies can do for you.
          </Typography>
          <Link to='/contact'>
            <Button
              variant='outlined'
              color='error'
              sx={{
                marginTop: "10px",
                textTransform: "none",
                border: "1px solid",
              }}
            >
              Request a Meeting
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}
