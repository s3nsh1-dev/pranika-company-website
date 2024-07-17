import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../../images/building-nobg.png";

export default function AboutUs() {
  return (
    <Box sx={{ padding: "20px", color: "#070066" }}>
      <Typography variant='h3' textAlign='center' fontWeight='bold' padding={2}>
        Welcome to Pranika Technologies and Consulting Private Limited
      </Typography>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} md={8}>
          <Typography variant='h6' padding={5}>
            Pranika Technologies and Consulting Pvt. Ltd. is your trusted
            partner in providing cutting-edge IT consulting, seamless cloud
            migrations, transformative technology solutions, and comprehensive
            professional training. With the addition of the ISO 9000:2015
            certification, we further solidify our commitment to excellence. Our
            team of skilled experts ensures that our processes align with global
            best practices, empowering businesses to navigate the ever-evolving
            digital landscape and achieve their goals.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={image}
              alt='building'
              style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Typography variant='h3' textAlign='center' fontWeight='bold' padding={6}>
        Core of PTCPL
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ padding: "5px 20px" }}>
          <Typography variant='h6' fontWeight='bold'>
            Our Mission
          </Typography>
          <Typography>
            At Pranika, our mission is to be a transformative force in the
            technology industry. We strive to deliver innovative solutions that
            empower our clients to thrive in the digital age. By leveraging our
            deep expertise and industry insights, we help businesses unlock new
            possibilities and achieve sustainable growth.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "5px 20px" }}>
          <Typography variant='h6' fontWeight='bold'>
            Our Values
          </Typography>
          <Typography>
            Integrity, Innovation, Collaboration, and Excellence are the core
            values that guide our every action. We are committed to building
            long-lasting partnerships with our clients, fostering a culture of
            continuous learning, and driving positive change in the communities
            we serve.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "5px 20px" }}>
          <Typography variant='h6' fontWeight='bold'>
            Our Team
          </Typography>
          <Typography>
            Pranika's strength lies in our diverse and talented team of IT
            professionals. Hailing from various backgrounds and disciplines, our
            experts bring a wealth of knowledge and experience to the table.
            Together, we work in sync to provide tailored solutions that address
            our clients' unique challenges and aspirations.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
