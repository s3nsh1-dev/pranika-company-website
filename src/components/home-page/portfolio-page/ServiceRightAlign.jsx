import React from "react";
import { Box, Typography } from "@mui/material";
import { PrimaryHeadingText } from "../../common/TitleTexts";
import { CustomDividerOne } from "../../common/Dividers";
import { colors } from "../../../constants/PortfolioConstants";

const ServiceRightAlign = ({ service }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: "space-between",
        width: { xs: "100%", md: "50%" },
        padding: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Lighter background color
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrimaryHeadingText color={randomColor} fontWeight={"bold"}>
          {service.serviceName}
        </PrimaryHeadingText>
      </Box>
      <CustomDividerOne orientation='horizontal' variant='fullWidth' flexItem />

      <Box sx={{ margin: "10px", listStyleType: "square" }} component='ul'>
        {service.offeredSubServices.map((service) => {
          return (
            <Typography
              component='li'
              key={service.id}
              sx={{ padding: "10px" }}
            >
              {service.subServiceName}: {service.subServiceDetail}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServiceRightAlign;
