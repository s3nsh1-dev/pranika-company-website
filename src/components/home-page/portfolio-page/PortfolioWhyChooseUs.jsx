import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { whyChooseUs } from "../../../constants/PortfolioConstants";

const PortfolioWhyChooseUs = () => {
  const whyList = whyChooseUs.map((why) => {
    return (
      <Card key={why.id} sx={{ margin: "10px", backgroundColor: "#FDF8F0" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {why.topic}
            </Typography>
            <Typography variant='body2' sx={{ color: "text.secondary" }}>
              {why.detail}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {whyList}
    </Box>
  );
};

export default PortfolioWhyChooseUs;
