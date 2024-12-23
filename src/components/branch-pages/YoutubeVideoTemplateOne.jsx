import React from "react";

export default function YoutubeVideoTemplateOne({ sourceURL }) {
  return (
    <iframe
      width='800'
      height='450'
      src={sourceURL}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      style={{ margin: "5px", borderRadius: "20px" }}
    ></iframe>
  );
}
