import {
  Typography,
  Card,
  Box,
  CardActions,
  CardContent,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { BlueBorderButton } from "../../common/Buttons";
import { ClampText } from "../../common/TitleTexts";
import Modal from "@mui/material/Modal";
import ExpandedCards from "./ExpandedCards";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "60%" }, // Responsive width
  maxHeight: "90vh", // Limit height
  overflowY: "auto", // Enable scrolling for overflow content
  bgcolor: "background.paper", // Background color
  borderRadius: "8px", // Add some border radius for better UI
  boxShadow: 24, // Shadow for elevation
  p: 3, // Padding
};

const cardContainer = {
  margin: "10px",
  maxWidth: 400,
  maxHeight: 320,
  // minHeight: 320,
  padding: "5px",
};
const headingStyle = {
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
};

export default function TextBasedBlogContent({
  title,
  intro,
  whyLearn,
  bulletPoints,
  author,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const content = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <ExpandedCards
          title={title}
          intro={intro}
          whyLearn={whyLearn}
          bulletPoints={bulletPoints}
          author={author}
        />
      </Box>
    </Modal>
  );

  return (
    <>
      <Card sx={cardContainer} elevation={6}>
        <CardActionArea sx={{ padding: "5px", minHeight: 250 }}>
          <CardContent>
            <Typography sx={headingStyle}>{title}</Typography>
            <ClampText>{intro}</ClampText>
          </CardContent>
        </CardActionArea>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <BlueBorderButton sx={{ width: 100 }} onClick={handleOpen}>
            View Post
          </BlueBorderButton>
          <Typography textAlign='end' fontSize='x-small' sx={{ color: "gray" }}>
            author: <i>{author}</i>
          </Typography>
        </CardActions>
      </Card>
      {content}
    </>
  );
}

/*
if its possible try ot make a data label to show the date this post where written
*/
