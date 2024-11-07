import React from "react";
import { textBasedContent } from "../../../constants/BlogsAndPostsConstants";
import TextBasedBlogContent from "./TextBasedBlogContent";

export default function TextBlogs() {
  const rendingSetOfBlogs = textBasedContent.map((blogs) => {
    return (
      <TextBasedBlogContent
        key={blogs.id}
        title={blogs.primaryTitle}
        intro={blogs.introduction}
        whyLearn={blogs.why}
        bulletPoints={blogs.contentPoints}
      />
    );
  });
  return <>{rendingSetOfBlogs}</>;
}
