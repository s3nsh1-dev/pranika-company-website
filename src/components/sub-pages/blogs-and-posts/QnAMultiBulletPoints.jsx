import React from "react";
import { Box, Typography } from "@mui/material";

const QnAMultiBulletPoints = ({ content }) => {
  return (
    <Box component='ol' type='a'>
      {content.map((contentItem) => {
        return (
          <Typography key={contentItem} component='li'>
            {contentItem}
          </Typography>
        );
      })}
    </Box>
  );
};

export default QnAMultiBulletPoints;
