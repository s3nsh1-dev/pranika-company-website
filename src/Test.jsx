import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import image from "./images/error-page-image.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='Advanced Data Analytics'
        subheader='Apache Spark & Hadoop'
      />
      <CardMedia component='img' height='194' image={image} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' textAlign='justify'>
          Our expertise in big data technologies such as Apache Spark and Hadoop
          allows us to manage and analyze vast amounts of data efficiently.
          Whether you need real-time analytics or batch processing, we can help
          you derive actionable insights from your data.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
