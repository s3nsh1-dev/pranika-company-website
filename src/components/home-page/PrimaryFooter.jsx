import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa";

export default function PrimaryFooter() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Grid
          display='flex'
          flexDirection='row'
          container
          columns={12}
          sx={{ textAlign: "start" }}
        >
          <Grid item xs={12} sm={4} sx={{ backgroundColor: "yellow" }}>
            <Typography variant='h6' fontWeight='bold'>
              Pranika Technologies
            </Typography>
            <Typography variant='subtitle2'>
              Emerald Plaza Office No 003, 2nd floor, Golf Course Extn Road,
              Sector 65-122101
            </Typography>
            <Typography variant='subtitle2'>Phone: 91-124-4226498</Typography>
            <Typography variant='subtitle2'>
              Email: info@winning-minds.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ backgroundColor: "blue" }}>
            <Typography variant='h6' fontWeight='bold'>
              Social Links
            </Typography>
            <Typography>
              <FaFacebook />
            </Typography>
            <Typography>LinkedIn</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ backgroundColor: "green" }}>
            <Typography variant='h6' fontWeight='bold'>
              Request a Meeting
            </Typography>
            <Typography variant='subtitle2'>
              Learn more about what winning minds can do for you.
            </Typography>
            <Button variant='contained' color='success'>
              Request a Meeting
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
