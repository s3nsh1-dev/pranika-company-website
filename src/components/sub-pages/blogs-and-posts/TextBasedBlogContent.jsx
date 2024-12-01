import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { BlueBorderButton } from "../../common/Buttons";
import { ClampText } from "../../common/TitleTexts";

const cardContainer = {
  margin: "10px",
  maxWidth: 400,
  maxHeight: 400,
  minHeight: 320,
  padding: "5px",
};
const headingStyle = {
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
};

export default function TextBasedBlogContent({ title, intro, author }) {
  return (
    <Card sx={cardContainer} elevation={6}>
      <CardActionArea sx={{ padding: "5px" }}>
        <CardContent>
          <Typography sx={headingStyle}>{title}</Typography>
          <ClampText>{intro}</ClampText>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <BlueBorderButton>Read Full Post</BlueBorderButton>
        <Typography textAlign='end' fontSize='small' sx={{ color: "gray" }}>
          author: <i>{author}</i>
        </Typography>
      </CardActions>
    </Card>
  );
}

/*
if its possible try ot make a data label to show the date this post where written
*/
