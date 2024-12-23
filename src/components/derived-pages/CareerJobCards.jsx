import React from "react";
import { Paper, Typography, Button, styled, Box } from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const WorkIcon = styled(WorkHistoryIcon)({
  fontSize: "medium",
  marginRight: "5px",
  color: "#1976d2",
});
const PlaceIcon = styled(EmojiTransportationIcon)({
  fontSize: "medium",
  marginRight: "5px",
  color: "green",
});

const PrimaryJobDescription = styled(Typography)({
  display: "flex",
  alignItems: "center",
});
const PrimaryText = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1rem",
});
const SecondaryText = styled(Typography)({
  fontSize: ".9rem",
});

export default function CareerJobCards({
  id,
  title,
  type,
  duration,
  location,
  mode,
  responsibilities,
  company,
  website,
  skills,
}) {
  return (
    <Paper
      key={id}
      sx={{
        padding: "20px",
        margin: "10px",
        maxWidth: 500,
        borderRadius: "15px",
        border: "2px solid #070066",
        "&:hover": {
          boxShadow: "2px 2px 10px",
          cursor: "default",
        },
      }}
    >
      <Typography variant='h5' fontWeight='bold' color='#070066'>
        {title}
      </Typography>
      <Typography
        component='a'
        href={website}
        target='_blank'
        variant='body2'
        sx={{ textDecoration: "none", color: "grey" }}
      >
        @{company}
      </Typography>
      <PrimaryJobDescription>
        <WorkIcon />
        <SecondaryText component='span'>{type},&nbsp;</SecondaryText>
        <SecondaryText component='span'> {duration}</SecondaryText>
      </PrimaryJobDescription>
      <PrimaryJobDescription>
        <PlaceIcon />
        <SecondaryText component='span'>{location},&nbsp;</SecondaryText>
        <SecondaryText component='span'>{mode}</SecondaryText>
      </PrimaryJobDescription>
      <Box>
        <PrimaryText component='span'>Responsibilities: </PrimaryText>
        <SecondaryText component='span'>{responsibilities}</SecondaryText>
      </Box>
      <Box>
        <PrimaryText component='span'>Skills: </PrimaryText>
        <SecondaryText component='span'>{skills.join(", ")}</SecondaryText>
      </Box>
      <Button
        component='a'
        href='mailto:hr@pranikatech.com'
        variant='outlined'
        sx={{ border: "1px solid", marginTop: "5px" }}
      >
        Send Resume to Apply
      </Button>
    </Paper>
  );
}
