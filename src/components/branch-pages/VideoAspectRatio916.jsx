import React from "react";
import { Box } from "@mui/material";

const style = {
  margin: "10px",
  borderRadius: "10px",
};

export default function VideoAspectRatio916({ video }) {
  return (
    <Box
      component='video'
      width='360px'
      height='640px'
      controls
      muted={true}
      playsInline
      autoPlay
      loop
      sx={style}
    >
      <source src={video} type='video/mp4' />
    </Box>
  );
}
