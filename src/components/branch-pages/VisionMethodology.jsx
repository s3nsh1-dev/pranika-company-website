import React from "react";
import { Typography, Box } from "@mui/material";
import "./visionMethodology.css";
import { pranikaMethodologies } from "../../constants/MissionAndVisionContants";

export default function VisionMethodology() {
  const renderMethodologies = pranikaMethodologies.map((method) => {
    return (
      <Box className='card' key={method.id}>
        <Box>
          <img
            src={method.image}
            alt={`image${method.pointsCount}`}
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <Typography variant='h6'>{method.title}</Typography>
        </Box>
        <Box className='card__content'>
          <Typography className='card__title'>{method.title}</Typography>
          <ul>
            {method.points.map((point, index) => {
              return <li key={index + method.id}>{point}</li>;
            })}
          </ul>
        </Box>
      </Box>
    );
  });
  return (
    <Box sx={{ padding: " 0px 5%" }}>
      <Typography
        textAlign='center'
        margin='2%'
        sx={{ fontSize: { sm: "3rem", xs: "2rem" } }}
      >
        Our Methodology
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderMethodologies}
      </Box>
    </Box>
  );
}
