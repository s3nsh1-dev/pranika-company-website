import React, { useState } from "react";
import YoutubeVideoTemplateTwo from "../branch-pages/YoutubeVideoTemplateTwo";
import { Box, Pagination, Stack } from "@mui/material";
import styled from "styled-components";
import { youtubeLinks } from "../../constants/HompageConstants";

const PageContainer = styled(Box)({
  maxWidth: "91%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const YTVideosContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const HeadlineText = styled("p")({
  margin: "30px 0px 10px 0px",
  textAlign: "start",
  paddingLeft: "10px",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

export default function HomepageYoutubeSuggestions() {
  const [pageNumber, setPageNumber] = useState(0);
  const renderPlaylistYT = [];
  const handlePageChange = (event, value) => {
    setPageNumber(value - 1);
  };
  createYTcards();

  function createYTcards() {
    const videosPerPage = 3;
    const from = pageNumber * videosPerPage;
    const to = from + videosPerPage;

    for (let i = from; i < to && i < youtubeLinks.length; i++) {
      renderPlaylistYT.push(
        <YoutubeVideoTemplateTwo
          key={youtubeLinks[i].id}
          sourceURL={youtubeLinks[i].link}
        />
      );
    }
  }

  return (
    <PageContainer>
      <HeadlineText>
        Watch, Learn, and Enjoy – Your Next Opportunity Awaits!
      </HeadlineText>
      <YTVideosContainer>{renderPlaylistYT}</YTVideosContainer>
      <Stack alignItems='center'>
        <Pagination
          count={2}
          onChange={handlePageChange}
          color='error'
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </PageContainer>
  );
}
