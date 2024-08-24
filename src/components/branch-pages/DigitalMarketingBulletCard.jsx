import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
// import image from "../../images/introDM.png";
// import image from "../../images/InfluenceMarketing.png";
// import image from "../../images/CMupscale.png";
// import image from "../../images/DM_SEOimage.png";
// import image from "../../images/DM_SocialMediaMarketing.png";
// import image from "../../images/DM_EmailMarketing.png";
import image from "../../images/DM_PPC.png";

const BulletCardInfo = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "20px",
  boxShadow: "2px 2px 5px 2px grey",
  margin: "10px",
  padding: "20px",
  height: "100%",
  "&:hover": {
    color: "#070066",
    boxShadow: "2px 2px 5px 2px #070066",
    borderRadius: "25px",
  },
});

export default function DigitalMarketingBulletCard({ point }) {
  return (
    <BulletCardInfo>
      <Box>
        <Typography fontWeight='bold' variant='h6'>
          {point.title}
        </Typography>
        <Box component='ul'>
          {point.content.map((bulletPoints, index) => {
            return (
              <Typography component='li' key={index}>
                {bulletPoints}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box
        component='img'
        src={image}
        alt='gghave'
        sx={{ height: 200, width: 200, margin: "5px" }}
      />
    </BulletCardInfo>
  );
}
