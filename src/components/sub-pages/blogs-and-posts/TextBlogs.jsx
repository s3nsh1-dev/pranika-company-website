import React from "react";

import TextBasedBlogContent from "./TextBasedBlogContent";
import { Box } from "@mui/material";

const boxContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function TextBlogs({ blog }) {
  const rendingSetOfBlogs = blog.map((post) => {
    return (
      <TextBasedBlogContent
        key={post.id}
        title={post.primaryTitle}
        intro={post.introduction}
        whyLearn={post.why}
        bulletPoints={post.contentPoints}
        author={post.author}
      />
    );
  });
  return <Box sx={boxContainer}>{rendingSetOfBlogs}</Box>;
}

/*
Text Blog will receive the blog data an props
and show the props
remove text based content with database of blog
*/
