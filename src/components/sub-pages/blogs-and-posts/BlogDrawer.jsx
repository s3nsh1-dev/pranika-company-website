import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";

const styledContainer = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
  width: "20%",
};
const buttonsValue = [
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
  { id: 0, buttonName: "" },
];
const BlogDrawer = () => {
  // this will kep the track of key based on the buttons events
  const [activeKey, setActiveKey] = useState(null);
  return (
    <Box sx={styledContainer}>
      <Button>Data Science & Business Analytics</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>AI & Machine Learning & Gen AI</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>Cloud Computing</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>DevOps & SRE (Site Reliability Engineering)</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>Software Development</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>IT Service Management & Enterprise Architecture</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>Digital Marketing & Growth Hacking</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>Big Data and advance analytics</Button>
      <Divider orientation='horizontal' variant='middle' flexItem />
      <Button>Career Fast-track & Professional Upskilling</Button>
    </Box>
  );
};

export default BlogDrawer;
/*
see what this is ?: const activeBlog = blogs.find(blog => blog.key === activeKey);
with the help of find we will find the first activeKey blog and show it content
*/
