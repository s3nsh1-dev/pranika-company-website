import React from "react";
import { digitalMarketingPoints } from "../../constants/DigitalMarketingConstants";
import DigitalMarketingBulletCard from "./DigitalMarketingBulletCard";
import { Box } from "@mui/material";
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
  return <BulletCardsContainer>{renderMarketingPoints}</BulletCardsContainer>;
}
