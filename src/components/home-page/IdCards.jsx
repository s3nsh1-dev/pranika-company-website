import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  Typography,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

export default function IdCards({ name, about }) {
  return (
    <Card
      sx={{
        // maxWidth: 345,
        maxWidth: 280,
        margin: " 0px 15px",
        flexWrap: "wrap",
      }}
    >
      <CardMedia
        sx={{ height: 240, width: 280 }}
        image='https://picsum.photos/id/237/200/300'
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <LinkedInIcon sx={{ color: "blue" }} />
        </IconButton>
        <IconButton>
          <ForwardToInboxIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
