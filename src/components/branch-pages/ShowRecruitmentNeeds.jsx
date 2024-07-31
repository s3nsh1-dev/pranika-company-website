import React from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";

const recruitmentPoints = [
  {
    id: 0,
    title: "Expertise in Talent Acquisition",
    content:
      "Our team of seasoned recruitment professionals brings a wealth of experience in sourcing, evaluating, and securing top talent across various industries. We leverage advanced recruitment technologies and methodologies to identify candidates who not only meet your technical requirements but also fit your company culture.",
    color: "primary",
  },
  {
    id: 1,
    title: "Tailored Recruitment Strategies",
    content:
      "We understand that each organization has unique hiring needs. Our customized recruitment strategies are designed to align with your specific requirements and goals. From defining job specifications to conducting thorough candidate screenings, we ensure a tailored approach that maximizes efficiency and effectiveness.",
    color: "secondary",
  },
  {
    id: 2,
    title: "Comprehensive Outsourcing Solutions",
    content:
      "Outsourcing your recruitment process to us allows you to focus on your core business activities while we handle the complexities of talent acquisition. Our end-to-end recruitment services include job advertising, candidate sourcing, interviewing, and onboarding, providing you with a seamless and hassle-free experience.",
    color: "warning",
  },
  {
    id: 3,
    title: "High-Quality Candidate Pool",
    content:
      "We have access to an extensive network of high-quality candidates across various sectors. Our rigorous screening process ensures that only the most qualified candidates are presented to you, saving you time and effort while enhancing the overall quality of your hires.",
    color: "error",
  },
  {
    id: 4,
    title: "Proven Track Record",
    content:
      "Our successful track record speaks volumes about our ability to deliver exceptional recruitment outcomes. We have consistently helped organizations secure top-tier talent, improve their hiring processes, and achieve their business objectives. Our clients trust us to deliver results, and we pride ourselves on exceeding expectations.",
    color: "success",
  },
  {
    id: 5,
    title: "Innovative Recruitment Solutions",
    content:
      "We stay ahead of industry trends and continuously innovate our recruitment practices. By integrating the latest technologies and tools, we enhance our ability to attract, assess, and secure top talent. Our commitment to innovation ensures that you benefit from cutting-edge recruitment solutions.",
    color: "inherit",
  },
];

export default function ShowRecruitmentNeeds() {
  const [boardData, setBoardData] = React.useState(
    recruitmentPoints[0].content
  );
  const [boxColor, setBoxColor] = React.useState("#1976d2");
  const [legendText, setLegendText] = React.useState(
    "Expertise in Talent Acquisition"
  );

  const handleData = (stringValue, borderColorPalete, legendTitle) => () => {
    setBoardData(stringValue);
    setLegendText(legendTitle);
    if (borderColorPalete === "primary") {
      setBoxColor("#1976d2");
    } else if (borderColorPalete === "secondary") {
      setBoxColor("purple");
    } else if (borderColorPalete === "warning") {
      setBoxColor("orange");
    } else if (borderColorPalete === "error") {
      setBoxColor("red");
    } else if (borderColorPalete === "success") {
      setBoxColor("green");
    } else {
      setBoxColor("black");
    }
  };
  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: { sm: "2.5rem", xs: "2rem" } }}
          textAlign='center'
          padding={5}
        >
          Why Choose Us ?
        </Typography>
      </Box>
      <Box sx={{ margin: "0px 2% 10px 2%" }}>
        <Grid container columns={12}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: 800,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {recruitmentPoints.map((info) => {
                return (
                  <Button
                    color={info.color}
                    key={info.id}
                    variant='outlined'
                    size='large'
                    sx={{
                      textTransform: "none",
                      margin: "10px",
                    }}
                    onClick={handleData(info.content, info.color, info.title)}
                  >
                    {info.title}
                  </Button>
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Paper
              component='fieldset'
              sx={{ border: `2px solid ${boxColor}`, padding: "20px" }}
            >
              <Typography
                component='legend'
                color={boxColor}
                fontWeight='bold'
                sx={{
                  border: `2px solid ${boxColor}`,
                  padding: "5px",
                  borderRadius: "30%",
                }}
              >
                {legendText}
              </Typography>
              <Typography color={boxColor} textAlign='justify'>
                {boardData}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
