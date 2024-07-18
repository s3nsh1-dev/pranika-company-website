import React from "react";
import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import video from "../../images/crop-video-7.mp4";
import "./Body.css";

export default function Body() {
  return (
    <>
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
            <Link to='/home'>
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
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
