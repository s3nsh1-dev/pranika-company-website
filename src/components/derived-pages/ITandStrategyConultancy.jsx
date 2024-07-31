import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ShowITConsultancyStack from "../branch-pages/ShowITConsultancyStack";
import tailored from "../../images/Tailored-Solutions.jpg";
import expert from "../../images/Expert-Team.png";
import innovate from "../../images/Innovative-Approach.jpg";
import track from "../../images/Proven-Track-Record.jpg";
import end from "../../images/End-to-End-Support.png";
import strategic from "../../images/Strategic-Insights.jpg";

const partnerUsData = [
  {
    id: 0,
    title: "Tailored Solutions",
    content:
      "We understand that every business is unique. Our consulting services are customized to fit your specific needs, ensuring that you get the most relevant and effective solutions.",
    image: tailored,
  },
  {
    id: 1,
    title: "Expert Team",
    content:
      "Our team comprises highly skilled professionals with extensive experience in various technologies. We bring a wealth of knowledge and practical expertise to every project, ensuring high-quality outcomes.",
    image: expert,
  },
  {
    id: 2,
    title: "Innovative Approach",
    content:
      "We stay ahead of industry trends and emerging technologies. Our commitment to innovation means you benefit from the latest advancements and best practices.",
    image: innovate,
  },
  {
    id: 3,
    title: "Proven Track Record",
    content:
      "We have a history of successfully delivering projects that enhance efficiency, drive growth, and create value for our clients. Our track record speaks to our ability to meet and exceed expectations.",
    image: track,
  },
  {
    id: 4,
    title: "End-to-End Support",
    content:
      "From initial consultation to implementation and beyond, we offer comprehensive support throughout the entire project lifecycle. Your success is our priority.",
    image: end,
  },
  {
    id: 5,
    title: "Strategic Insights",
    content:
      "Our strategy consulting services go beyond technology. We provide strategic insights and actionable recommendations that align with your business goals and drive long-term success.",
    image: strategic,
  },
];

export default function ITandStrategyConultancy() {
  return (
    <Box>
      <Box textAlign='justify' sx={{ padding: "20px 5% 0px 5%" }}>
        <Typography
          fontWeight='bold'
          sx={{ fontSize: { md: "1.3rem", xs: "1.1rem" } }}
        >
          Why Choose Our Consulting Services?
        </Typography>
        In today's fast-paced and technology-driven world, businesses need more
        than just basic IT support—they need strategic, cutting-edge solutions
        that drive growth, efficiency, and innovation. At Pranika Technologies
        and Consulting Pvt. Ltd., we specialize in delivering top-tier IT and
        strategy consulting services designed to help you harness the full
        potential of modern technologies and achieve your business goals.
      </Box>
      <ShowITConsultancyStack />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "3rem", xs: "2rem" },
            marginTop: "40px",
            marginBottom: { xs: "20px", md: "0px" },
          }}
          // padding={5}
          textAlign='center'
        >
          Why Partner with Us?
        </Typography>
        <Box sx={{ margin: "0px 2%" }}>
          {partnerUsData.map((info, index) => {
            if (index % 2 === 0) {
              return (
                <Grid
                  container
                  key={info.id}
                  sx={{
                    maxWidth: 1500,
                    margin: {
                      sm: "20px 0px",
                      xs: "20px 0px",
                      md: "0px",
                      xl: "0px",
                    },
                    display: "flex",
                    alignItems: "center",
                    // alignItems: "end",
                    justifyContent: "end",
                  }}
                >
                  <Grid item xs={12} md={8}>
                    <Typography variant='h5' fontWeight='bold'>
                      {info.title}
                    </Typography>
                    <Typography variant='h6'>{info.content}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Box
                      component='img'
                      src={info.image}
                      alt='ImagesIsImaging'
                      sx={{
                        width: "300px",
                        height: "300px",
                        // border: "2px solid black",
                        display: { xs: "none", md: "block" },
                      }}
                    />
                  </Grid>
                </Grid>
              );
            } else {
              return (
                <Grid
                  container
                  key={info.id}
                  sx={{
                    maxWidth: 1500,
                    // margin: "20px 0px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={12} md={4}>
                    <Box
                      component='img'
                      src={info.image}
                      alt='ImagesIsImaging'
                      sx={{
                        width: "300px",
                        height: "300px",
                        // border: "2px solid black",
                        display: { xs: "none", md: "block" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant='h5' fontWeight='bold'>
                      {info.title}
                    </Typography>
                    <Typography variant='h6'>{info.content}</Typography>
                  </Grid>
                </Grid>
              );
            }
          })}
        </Box>
      </Box>
      <Box textAlign='justify' sx={{ padding: "5%" }}>
        <Typography
          fontWeight='bold'
          sx={{ fontSize: { md: "1.3rem", xs: "1.1rem" } }}
        >
          By choosing Pranika Technologies and Consulting Pvt. Ltd., you are
          partnering with a consultancy that not only provides technical
          expertise but also understands the strategic implications of
          technology in achieving business excellence. Contact us today to
          discover how we can help you unlock your potential and lead your
          industry with confidence.
        </Typography>
      </Box>
    </Box>
  );
}
