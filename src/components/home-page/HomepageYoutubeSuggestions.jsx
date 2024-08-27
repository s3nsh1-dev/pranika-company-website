import React from "react";
import YoutubeVideoTemplateTwo from "../branch-pages/YoutubeVideoTemplateTwo";
import { Box, Typography } from "@mui/material";

const youtubeLinks = [
  {
    id: 0,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZo74IMpZrHohwgyZy0hhle2",
  },
  {
    id: 1,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZoX-zM1VG8hmAoCxerkV2on",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZqnhYSsegUYE6dgE0L6Y-se",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZp99m-2yY4OdK8S45JFbDcC",
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZpxQir10VxiIfyezZ_UxWo3",
  },
  {
    id: 5,
    link: "https://www.youtube.com/embed/videoseries?list=PL-nn9R9ItTZrFaZtc7ftElOqRu8zHI-7f",
  },
];

export default function HomepageYoutubeSuggestions() {
  const renderPlaylistYT = youtubeLinks.map((ytLinks) => {
    return (
      <YoutubeVideoTemplateTwo key={ytLinks.id} sourceURL={ytLinks.link} />
    );
  });
  return (
    <Box
      sx={{
        maxWidth: "91%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          margin: "10px 0px",
          fontSize: { sm: "1.5rem", xs: "1rem" },
          fontWeight: "bold",
        }}
      >
        Watch, Learn, and Enjoy – Your Next Favorite Video Awaits!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {renderPlaylistYT}
      </Box>
    </Box>
  );
}
