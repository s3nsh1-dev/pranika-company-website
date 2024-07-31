import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ServiceOfferedCard from "../branch-pages/ServiceOfferedCard";
import hadoop from "../../images/Advanced-Data-Analytics.jpg";
import powerBI from "../../images/Business-Intelligence.jpg";
import aws from "../../images/Cloud-and-DevOps.jpg";
import ai from "../../images/artificial-intelligence.jpg";
import sql from "../../images/Robust-Development.png";
import reactJS from "../../images/Modern-Web-Development.jpg";

const servicesOfferedInformation = [
  {
    id: 0,
    title: "Advanced Data Analytics",
    subheading: "Apache Spark & Hadoop",
    content:
      "Our expertise in big data technologies such as Apache Spark and Hadoop allows us to manage and analyze vast amounts of data efficiently. Whether you need real-time analytics or batch processing, we can help you derive actionable insights from your data.",
    image: hadoop,
  },
  {
    id: 1,
    title: "Cutting-Edge Technologies",
    subheading: "Machine Learning & Generative AI",
    content:
      "Our team utilizes machine learning and generative AI to develop predictive models and intelligent systems that drive innovation and provide a competitive edge. From personalized recommendations to automated content creation.",
    image: ai,
  },
  {
    id: 2,
    title: "Cloud and DevOps",
    subheading: "AWS & Azure DevOps",
    content:
      "Our cloud and DevOps services on AWS and Azure streamline your IT operations, enhance scalability, and improve deployment speed. We implement best practices to optimize your cloud infrastructure and automate processes for greater efficiency.",
    image: aws,
  },
  {
    id: 3,
    title: "Business Intelligence",
    subheading: "Power BI",
    content:
      "We leverage Power BI to transform raw data into visually compelling and interactive reports. Our solutions help you make data-driven decisions by providing clear, actionable insights and trends.",
    image: powerBI,
  },
  {
    id: 4,
    title: "Robust Development",
    subheading: "SQL & Python",
    content:
      "With expertise in SQL for database management and Python for versatile programming, we ensure that your data is managed effectively and your applications are developed with precision and scalability.",
    image: sql,
  },
  {
    id: 5,
    title: "Modern Web Development",
    subheading: "ReactJS",
    content:
      "We use ReactJS to build dynamic, responsive, and user-friendly web applications. Our focus is on creating seamless user experiences that drive engagement and meet your business objectives.",
    image: reactJS,
  },
];
export default function ShowITConsultancyStack() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
        textAlign='center'
        padding={5}
      >
        Our Expertise
      </Typography>
      <Grid
        container
        columns={12}
        sx={{
          maxWidth: "1200px",
        }}
      >
        {servicesOfferedInformation.map((info) => {
          return (
            <Grid
              item
              key={info.id}
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ServiceOfferedCard
                image={info.image}
                title={info.title}
                subheading={info.subheading}
                content={info.content}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
