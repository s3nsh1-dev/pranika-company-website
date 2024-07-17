import { Typography, Box, Button, Grid } from "@mui/material";
import React from "react";

const serviceDetails = [
  {
    id: 1,
    heading: "Strategic IT Consulting",
    details:
      "Our strategic IT consulting services help businesses align their technology initiatives with their overarching goals. We work closely with our clients to assess their current IT landscape, identify pain points, and develop customized roadmaps that drive digital transformation and long-term success.",
  },
  {
    id: 2,
    heading: "Business Process Optimization",
    details:
      "By leveraging our expertise in business process analysis and automation, we help organizations streamline their operations, improve efficiency, and enhance productivity. Our holistic approach ensures that every aspect of your business  functions seamlessly, enabling you to focus on core competencies.",
  },
  {
    id: 3,
    heading: "IT Infrastructure Consulting",
    details:
      "From network design and hardware selection to system integration and maintenance, our IT infrastructure consulting services provide comprehensive solutions that ensure the reliability, scalability, and security of your technology infrastructure. We help you build a robust foundation for your digital initiatives.",
  },
  {
    id: 4,
    heading: "Data and Analytics Consulting",
    details:
      "Unlock the power of your data with our data and analytics consulting services. We help businesses harness the insights buried within their data, enabling them to make informed decisions, optimize performance, and gain a competitive edge in the market.",
  },
];

export default function ItServiceInfoPage() {
  const renderServices = serviceDetails.map((info) => {
    return (
      <Grid
        item
        xs={12}
        md={6}
        key={info.id}
        padding={2}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          variant='outlined'
          sx={{ height: "40px", fontSize: "25px", border: "2px solid" }}
        >
          {info.id}
        </Button>
        <Box sx={{ padding: "0px 10px" }}>
          <Typography variant='h6' fontWeight='bold'>
            {info.heading}
          </Typography>
          <Typography textAlign='justify'>{info.details}</Typography>
        </Box>
      </Grid>
    );
  });

  return (
    <Box>
      <Typography variant='h3' textAlign='center'>
        IT SERVICES
      </Typography>
      <Grid container columns={12} sx={{ padding: "20px 0px" }}>
        {renderServices}
      </Grid>
    </Box>
  );
}
