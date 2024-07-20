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
import kamalImage from "../../images/kamal-shukla-profile-pic.png";
import abhishekImage from "../../images/abhishek-pandey-profile-pic.png";
import ramImage from "../../images/ram-goswami-profile-pic.png";

const imageArray = [
  { id: 1, image: kamalImage },
  { id: 2, image: abhishekImage },
  { id: 3, image: ramImage },
];
const subject = "Inquiry about your services";
const body = "Hello! I would like to know more about your services.";

export default function IdCards({ id, name, about, link, mail }) {
  const mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Card
      sx={{
        maxWidth: 280,
        margin: " 5px 15px",
        flexWrap: "wrap",
      }}
    >
      <CardMedia
        sx={{ height: 240, width: 280 }}
        image={imageArray[id].image}
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
        <IconButton href={link} target='_blank' rel='noreferrer'>
          <LinkedInIcon sx={{ color: "blue" }} />
        </IconButton>
        <IconButton href={mailtoLink} target='_blank' rel='noreferrer'>
          <ForwardToInboxIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
