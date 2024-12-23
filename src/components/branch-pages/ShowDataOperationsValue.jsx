import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import image from "../../images/data-op-accordian.jpg";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
}));

export default function ShowDataOperationsValue({ title, content }) {
  return (
    <>
      <Typography
        textAlign='center'
        fontWeight='bold'
        fontSize={"2rem"}
        sx={{ margin: "30px 10px" }}
      >
        {title}
      </Typography>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 500,
              padding: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Masonry columns={{ xs: "2", sm: "3" }} spacing={2}>
              {content.map((data) => (
                <Paper key={data.id}>
                  <StyledAccordion
                    sx={{
                      border: "2px solid #070066",
                      color: "#070066",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color='success' />}
                    >
                      <Typography fontWeight='bold'>{data.primary}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>{data.secondary}</AccordionDetails>
                  </StyledAccordion>
                </Paper>
              ))}
            </Masonry>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component='img'
            src={image}
            alt='ShowDataOperations'
            sx={{ height: 400 }}
          />
        </Grid>
      </Grid>
    </>
  );
}
