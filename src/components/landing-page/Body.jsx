import React from "react";
import video from "../../images/crop-video-7.mp4";
import "./Body.css";
import { Button } from "@mui/material";

export default function Body() {
  return (
    <div className='body-container'>
      <video autoPlay loop muted className='background-video'>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'>
        <div className='welcome-card puff-in-center'>
          <div>
            <h1 className='transparent-text'>Explore our Features</h1>
          </div>
          <Button
            variant='outlined'
            className='roll-in-left'
            sx={{
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              fontWeight: "400",
              color: "white",
              border: "1px solid white",
            }}
          >
            START
          </Button>
        </div>
      </div>
    </div>
  );
}
