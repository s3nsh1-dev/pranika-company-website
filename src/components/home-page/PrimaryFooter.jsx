import React from "react";
import { Button, Grid, Typography, IconButton, Divider } from "@mui/material";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const IconArray = [
  <FaFacebook color='white' />,
  <FaInstagram color='red' />,
  <FaLinkedin color='white' />,
  <FaYoutube color='red' />,
];
export default function PrimaryFooter() {
  return (
    <Grid
      display='flex'
      flexDirection='row'
      container
      columns={12}
      padding={4}
      sx={{ backgroundColor: "#0b0178" }}
      color='white'
    >
      <Grid item xs={12} sm={4} padding={2}>
        <Typography variant='h6' fontWeight='bold'>
          Pranika Technologies
        </Typography>
        <Typography variant='subtitle2'>
          Emerald Plaza Office No 003, 2nd floor, Golf Course Extn Road, Sector
          65-122101
        </Typography>
        <Typography variant='subtitle2'>Phone: 91-124-4226498</Typography>
        <Typography variant='subtitle2'>
          Email: info@winning-minds.com
        </Typography>
      </Grid>
      <Divider orientation='vertical' flexItem color='grey' />
      <Grid item xs={12} sm={4} padding={2}>
        <Typography variant='h6' fontWeight='bold'>
          Social Links
        </Typography>
        {IconArray.map((icons) => {
          return <IconButton>{icons}</IconButton>;
        })}
      </Grid>
      <Divider orientation='vertical' flexItem color='grey' />
      <Grid item xs={12} sm={3.8} padding={2}>
        <Typography variant='h6' fontWeight='bold'>
          Request a Meeting
        </Typography>
        <Typography variant='subtitle2'>
          Learn more about what winning minds can do for you.
        </Typography>
        <Button variant='contained' color='success' sx={{ marginTop: "10px" }}>
          Request a Meeting
        </Button>
      </Grid>
    </Grid>
  );
}
