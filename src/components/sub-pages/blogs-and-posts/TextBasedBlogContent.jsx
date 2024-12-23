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
import AuthorName from "./AuthorName";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "90vw", md: "60vw" }, // Responsive width
  maxHeight: "95vh", // Limit height
  overflowX: "auto", // Enable scrolling for overflow content
  borderRadius: "8px", // Add some border radius for better UI
  bgcolor: "white",
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
          <AuthorName author={author} />
        </CardActions>
      </Card>
      {content}
    </>
  );
}
