import React from "react";
import { textBasedContent } from "../../../constants/BlogsAndPostsConstants";
import TextBasedBlogContent from "./TextBasedBlogContent";
import { Box } from "@mui/material";

const boxContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function TextBlogs() {
  const rendingSetOfBlogs = textBasedContent.map((blogs) => {
    return (
      <TextBasedBlogContent
        key={blogs.id}
        title={blogs.primaryTitle}
        intro={blogs.introduction}
        whyLearn={blogs.why}
        bulletPoints={blogs.contentPoints}
        author={blogs.author}
      />
    );
  });
  return <Box sx={boxContainer}>{rendingSetOfBlogs}</Box>;
}
