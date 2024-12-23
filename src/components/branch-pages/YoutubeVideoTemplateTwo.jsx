import React from "react";

export default function YoutubeVideoTemplateTwo({ sourceURL }) {
  return (
    <iframe
      width='560'
      height='315'
      type='text/html'
      id='ytplayer'
      referrerPolicy='strict-origin-when-cross-origin'
      src={sourceURL}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      style={{ margin: "5px", borderRadius: "10px", border: "2px solid red " }}
    ></iframe>
  );
}
