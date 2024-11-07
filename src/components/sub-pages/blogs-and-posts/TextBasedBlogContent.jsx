import React from "react";

export default function TextBasedBlogContent({ title, intro, content }) {
  return (
    <div>
      <div>{title}</div>
      <div>{intro}</div>
      <div>{content}</div>
    </div>
  );
}
