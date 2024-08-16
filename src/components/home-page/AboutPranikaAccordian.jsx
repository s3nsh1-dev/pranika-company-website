import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
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
    title: "Why is learning data analytics important?",
    content:
      "Learning data analytics is crucial because it allows you to understand and interpret complex datasets, providing valuable insights that drive business decisions. Mastering industry-standard tools like SQL, Python, and R can enhance your analytical skills and open up diverse career opportunities. With hands-on experience and practical knowledge, you'll be well-equipped to tackle real-world data challenges and make data-driven decisions effectively.",
  },
  {
    panel: "panel2",
    title: "What is the significance of learning data visualization?",
    content:
      "Data visualization is essential as it helps transform complex data into intuitive and actionable insights through visual representations. By learning tools like Tableau, Power BI, and D3.js, you can create interactive dashboards that facilitate better decision-making. Effective data storytelling and visualization principles enable you to communicate data findings clearly, making them accessible to a wider audience and driving impactful business strategies.",
  },
  {
    panel: "panel3",
    title: "Why is understanding data transformation important?",
    content:
      "Understanding data transformation is vital because it ensures that raw data is converted into a usable format for analysis. Mastering ETL processes allows you to manage data flow efficiently, while data cleaning techniques ensure data accuracy and reliability. Automation skills in data transformation save time and reduce errors, and integrating data from various sources helps create comprehensive datasets that provide deeper insights. Scalable solutions are crucial for handling large datasets effectively, making data transformation a key skill in any data-driven environment.",
  },
  {
    panel: "panel4",
    title: "Why should one focus on learning data operations?",
    content:
      "Learning data operations is important for maintaining the efficiency, security, and integrity of data systems. Best practices in data management ensure that data is organized and accessible, while performance optimization techniques enhance the speed and reliability of data processes. Implementing robust security measures protects sensitive information, and familiarity with tools like Hadoop and Spark enables you to handle large-scale data operations. Effective monitoring and maintenance of data operations are essential for ensuring that data systems run smoothly and support organizational goals.",
  },
];

export default function AboutPranikaAccordion() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ textAlign: "center", padding: " 0px 7% 2% 7%" }}>
      <Typography
        sx={{ margin: "30px 0px", fontSize: { sm: "3rem", xs: "2rem" } }}
      >
        Our Key Differentiators
      </Typography>
      <Box></Box>
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
            <Typography variant='h6' fontWeight={`bold`}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={accorContent}>
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
