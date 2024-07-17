import React from "react";
import { Box, Paper, Typography, IconButton, Divider } from "@mui/material";
import kamalImage from "../../images/kamal-shukla-profile-pic.png";
import abhishekImage from "../../images/abhishek-pandey-profile-pic.png";
import rajImage from "../../images/ram-goswami-profile-pic.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

const imageSelection = [
  { imageId: 0, image: kamalImage },
  { imageId: 1, image: abhishekImage },
  { imageId: 2, image: rajImage },
];

export default function MemberDivision({
  id,
  name,
  position,
  longSummary,
  profileLink,
  mail,
}) {
  return (
    <Paper
      sx={{
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: {
          xs: "column", // column direction on small screens
          sm: "column", // column direction on medium screens
          md: "row", // row direction on larger screens
        },
        alignItems: "center",
        marginTop: "30px",
        color: "#070066",
        boxShadow: "10px 10px 15px",
      }}
    >
      <Box
        component='img'
        src={imageSelection[id]["image"]}
        alt='images'
        sx={{ maxHeight: 300, maxWidth: 300, borderRadius: "20px" }}
        border='5px solid #070066'
      />
      <Box sx={{ textAlign: { xs: "center", md: "left" } }} padding={2}>
        <Typography variant='h4' fontWeight='bold'>
          {name}
        </Typography>
        <Typography variant='body2' fontWeight='bold'>
          {`<company-position>`}
          {position}
        </Typography>

        <Typography
          variant='h6'
          sx={{ textAlign: "justify", margin: "10px 0px" }}
        >
          {longSummary}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#d6fff9",
            borderRadius: "20px",
            maxWidth: "88px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton href={profileLink} target='_blank'>
            <LinkedInIcon sx={{ color: "blue" }} />
          </IconButton>
          <Divider orientation='vertical' variant='middle' flexItem />
          <IconButton href={`mailto:${mail}`}>
            <ForwardToInboxIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
