import React, { useState } from "react";
import {
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import RecommendIcon from "@mui/icons-material/Recommend";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function ServiceOfferedCard({
  image,
  title,
  subheading,
  content,
}) {
  const [heartColor, setHeartColor] = useState(false);
  const [color, setColor] = useState("green");
  const handleColor = () => {
    if (!heartColor) {
      setColor("grey");
    } else {
      setColor("green");
    }
    setHeartColor(!heartColor);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        border: "4px solid #070066",
        borderRadius: "20px",
        boxShadow: "5px 5px 5px grey",
      }}
    >
      <Box sx={{ padding: "10px" }}>
        <Typography variant='h6'>{title}</Typography>
        <Typography>{subheading}</Typography>
      </Box>
      <CardMedia component='img' height='194' image={image} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' textAlign='justify'>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onClick={handleColor}>
          <RecommendIcon sx={{ color: color }} />
        </IconButton>
        <IconButton aria-label='share'>
          <Box component='a' href={`mailto: info@pranikatech.com`}>
            <ForwardToInboxIcon color='error' />
          </Box>
        </IconButton>
      </CardActions>
    </Card>
  );
}
