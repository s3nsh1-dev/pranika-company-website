import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ShowITConsultancyStack from "../branch-pages/ShowITConsultancyStack";

const partnerUsData = [
  {
    id: 0,
    title: "Tailored Solutions",
    content:
      "We understand that every business is unique. Our consulting services are customized to fit your specific needs, ensuring that you get the most relevant and effective solutions.",
  },
  {
    id: 1,
    title: "Expert Team",
    content:
      "Our team comprises highly skilled professionals with extensive experience in various technologies. We bring a wealth of knowledge and practical expertise to every project, ensuring high-quality outcomes.",
  },
  {
    id: 2,
    title: "Innovative Approach",
    content:
      "We stay ahead of industry trends and emerging technologies. Our commitment to innovation means you benefit from the latest advancements and best practices.",
  },
  {
    id: 3,
    title: "Proven Track Record",
    content:
      "We have a history of successfully delivering projects that enhance efficiency, drive growth, and create value for our clients. Our track record speaks to our ability to meet and exceed expectations.",
  },
  {
    id: 4,
    title: "End-to-End Support",
    content:
      "From initial consultation to implementation and beyond, we offer comprehensive support throughout the entire project lifecycle. Your success is our priority.",
  },
  {
    id: 5,
    title: "Strategic Insights",
    content:
      "Our strategy consulting services go beyond technology. We provide strategic insights and actionable recommendations that align with your business goals and drive long-term success.",
  },
];

export default function ITandStrategyConultancy() {
  return (
    <Box>
      <Typography textAlign='justify' sx={{ padding: "20px 5% 0px 5%" }}>
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
      </Typography>
      <ShowITConsultancyStack />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
          padding={5}
          textAlign='center'
        >
          Why Partner with Us?
        </Typography>
        {partnerUsData.map((info) => {
          return (
            <Grid
              container
              key={info.id}
              sx={{
                maxWidth: 1500,
                margin: "20px 0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={3}>
                <Box
                  component='img'
                  src=''
                  alt='ImagesIsImaging'
                  sx={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid black",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography>{info.id}</Typography>
                <Typography variant='h6'>{info.title}</Typography>
                <Typography>{info.content}</Typography>
              </Grid>
            </Grid>
          );
        })}
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
