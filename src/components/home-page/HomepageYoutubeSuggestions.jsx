import React, { useState } from "react";
import YoutubeVideoTemplateTwo from "../branch-pages/YoutubeVideoTemplateTwo";
import { Box, Typography, Pagination, Stack } from "@mui/material";

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
  const [pageNumber, setPageNumber] = useState(0);
  const renderPlaylistYT = [];
  createYTcards();
  const handlePageChange = (event, value) => {
    setPageNumber(value - 1);
  };

  function createYTcards() {
    let from = 0;
    let to = 0;
    if (pageNumber === 0) {
      from = 0;
      to = 3;
    } else {
      from = 3;
      to = 6;
    }
    for (let i = from; i < to; i++) {
      renderPlaylistYT.push(
        <YoutubeVideoTemplateTwo
          key={youtubeLinks[i].id}
          sourceURL={youtubeLinks[i].link}
        />
      );
    }
  }

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
        textAlign='start'
        paddingLeft='10px'
        sx={{
          margin: "30px 0px 10px 0px",
          fontSize: { sm: "1.5rem", xs: "1rem" },
          fontWeight: "bold",
        }}
      >
        Watch, Learn, and Enjoy – Your Next Opportunity Awaits!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {renderPlaylistYT}
      </Box>
      <Stack alignItems='center'>
        <Pagination count={2} onChange={handlePageChange} />
      </Stack>
    </Box>
  );
}
