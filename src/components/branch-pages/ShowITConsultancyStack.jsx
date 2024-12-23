import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ServiceOfferedCard from "../branch-pages/ServiceOfferedCard";
import spark from "../../images/spark.png";
import hadoop from "../../images/hadoopNew.jpg";
import powerBI from "../../images/powerBI.png";
import aws from "../../images/Cloud-and-DevOps.jpg";
import ai from "../../images/artificial-intelligence.jpg";
import sql from "../../images/sql.png";
import python from "../../images/python.png";
import reactJS from "../../images/reactJS.png";

const servicesOfferedInformation = [
  {
    id: 0,
    title: "Advanced Data Analytics",
    subheading: "Apache Spark",
    content:
      "A fast, open-source data processing engine for big data. It supports various workloads, including batch processing, interactive querying, machine learning, and streaming analytics, making it a versatile tool for handling diverse data needs.",
    image: spark,
  },

  {
    id: 2,
    title: "Cutting-Edge Technologies",
    subheading: "Machine Learning & Generative AI",
    content:
      "Our team utilizes machine learning and generative AI to develop predictive models and intelligent systems that drive innovation and provide a competitive edge. From personalized recommendations to automated content creation.",
    image: ai,
  },
  {
    id: 1,
    title: "Innovative Data Solutions",
    subheading: "Hadoop",
    content:
      "An open-source framework, ideal for batch processing, data warehousing, and managing big data workloads. It provides scalable and reliable infrastructure making it essential for businesses looking to manage and analyze large-scale data efficiently.",
    image: hadoop,
  },
  {
    id: 3,
    title: "Cloud and DevOps",
    subheading: "AWS & Azure DevOps",
    content:
      "Our cloud and DevOps services on AWS and Azure streamline your IT operations, enhance scalability, and improve deployment speed. We implement best practices to optimize your cloud infrastructure and automate processes for greater efficiency.",
    image: aws,
  },
  {
    id: 4,
    title: "Business Intelligence",
    subheading: "Power BI",
    content:
      "We leverage Power BI to transform raw data into visually compelling and interactive reports. Our solutions help you make data-driven decisions by providing clear, actionable insights and trends.",
    image: powerBI,
  },

  {
    id: 6,
    title: "Robust Development",
    subheading: "Python",
    content:
      "Python is ideal for developing scalable applications, automating tasks, and integrating with various data processing frameworks, making it a key tool in modern software development.",
    image: python,
  },
  {
    id: 5,
    title: "Modern Web Development",
    subheading: "ReactJS",
    content:
      "We use ReactJS to build dynamic, responsive, and user-friendly web applications. Our focus is on creating seamless user experiences that drive engagement and meet your business objectives.",
    image: reactJS,
  },
  {
    id: 7,
    title: "Mastering Data with SQL",
    subheading: "SQL",
    content:
      "A powerful language used for database management. SQL enables efficient querying, data manipulation, and reporting, ensuring that your data is organized and accessible for business intelligence and analytics.",
    image: sql,
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
          maxWidth: "1500px",
        }}
      >
        {servicesOfferedInformation.map((info) => {
          return (
            <Grid
              item
              key={info.id}
              xs={12}
              md={3}
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
