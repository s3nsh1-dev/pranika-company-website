import React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const accorStyle = {
  backgroundColor: "#000a7a",
  border: "2px solid #000a7a",
  color: "white",
  margin: "5px 0px",
  padding: "0px 5px 5px 5px",
};

const accorContent = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease-in-out",
  textAlign: "start",
  margin: "0px 10px",
};

export default function OfferedCoursesInfoAccordian({
  content,
  link,
  name,
  summary,
  syllabus,
  downloadPDF,
}) {
  return (
    <Grid item sm={12} md={6}>
      <Accordion sx={accorStyle} borderRadius='30px'>
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "white" }} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography fontWeight='bold'>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accorContent}>
          {content.map((content) => (
            <ListItem key={content.id}>
              <ListItemText primary={content.title} secondary={content.about} />
            </ListItem>
          ))}
        </AccordionDetails>
        <AccordionActions>
          <Button
            sx={{ textTransform: "none", color: "white" }}
            onClick={downloadPDF}
          >
            Syllabus
          </Button>
          <Box
            component={Link}
            to={link}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Button sx={{ textTransform: "none", color: "white" }}>
              Learn More
            </Button>
          </Box>
        </AccordionActions>
      </Accordion>
    </Grid>
  );
}
