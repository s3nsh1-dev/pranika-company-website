import React from "react";
import TextBasedBlogContent from "./TextBasedBlogContent";

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
  return <>{rendingSetOfBlogs}</>;
}
