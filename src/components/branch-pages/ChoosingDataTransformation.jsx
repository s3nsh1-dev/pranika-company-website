import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function ChoosingDataTransformation({ title, content }) {
  const renderContent = content.map((data, index) => {
    return (
      <Paper
        key={data.id}
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          padding: "10px 25px 25px 25px",
          maxWidth: 500,
          borderRadius: "20px",
          border: "4px solid white",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <Typography variant='h6' padding={1}>
          {index + 1}.&nbsp;{data.title}
        </Typography>
        <Box
          component='ul'
          margin={0}
          sx={{
            border: "4px solid orange",
            backgroundColor: "white",
            color: "black",
            borderRadius: "20px",
            padding: "5px 20px 5px 40px",
          }}
        >
          <Typography component='li'>{data.content[0]}</Typography>
          <Typography component='li'>{data.content[1]}</Typography>
        </Box>
      </Paper>
    );
  });
  return (
    <Box>
      <Typography
        textAlign='center'
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight='bold'
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderContent}
      </Box>
    </Box>
  );
}
