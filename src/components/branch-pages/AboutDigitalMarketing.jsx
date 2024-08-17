import React from "react";
import { digitalMarketingPoints } from "../../constants/DigitalMarketingConstants";
import DigitalMarketingBulletCard from "./DigitalMarketingBulletCard";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BulletCardsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-evenly",
});
export default function AboutDigitalMarketing() {
  const renderMarketingPoints = digitalMarketingPoints.map((point) => {
    return <DigitalMarketingBulletCard key={point.id} point={point} />;
  });
  return (
    <Box>
      <Typography
        textAlign='center'
        fontWeight='bold'
        fontSize={"2rem"}
        sx={{ margin: "10px 10px" }}
      >
        Our Comprehensive Digital Marketing Services
      </Typography>
      <BulletCardsContainer>{renderMarketingPoints}</BulletCardsContainer>
    </Box>
  );
}
