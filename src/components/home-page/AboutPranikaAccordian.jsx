import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const accorStyle = {
  border: "2px solid #000a7a",
  color: "#000a7a",
  borderRadius: "10px",
  margin: "5px 0px",
  padding: "0px 5px 5px 5px",
};
const accorContent = {
  backgroundColor: "#000a7a",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease-in-out",
  textAlign: "start",
};

const panelData = [
  {
    panel: "panel1",
    title: "Achievements of 2020",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    panel: "panel2",
    title: "Achievements of 2021",
    content:
      "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    panel: "panel3",
    title: "Achievements of 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    panel: "panel4",
    title: "Achievements of 2023",
    content:
      "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function AboutPranikaAccordion() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ textAlign: "center", padding: " 0px 70px " }}>
      <Typography
        variant='h4'
        fontFamily='initial'
        sx={{ margin: "30px 0px" }}
        noWrap
      >
        Our Key Differentiators
      </Typography>
      {panelData.map(({ panel, title, content }) => (
        <Accordion
          key={panel}
          expanded={expanded === panel}
          onChange={handleChange(panel)}
          sx={accorStyle}
        >
          <AccordionSummary
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
            expandIcon={<KeyboardArrowDownIcon sx={{ color: "#000a7a" }} />}
          >
            <Typography fontWeight='bold'>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={accorContent}>
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
