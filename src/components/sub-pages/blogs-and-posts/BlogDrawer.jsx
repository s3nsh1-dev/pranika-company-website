import React, { useState, Fragment } from "react";
import { Box, Button, Divider } from "@mui/material";
import { blogButtonLabels } from "../../../constants/BlogsAndPostsConstants";

export const styledContainer = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
  width: "20%",
};
const BlogDrawer = () => {
  // this will kep the track of key based on the buttons events
  const [activeKey, setActiveKey] = useState(null);
  return (
    <Box sx={styledContainer}>
      {blogButtonLabels.map((button) => {
        return (
          <Fragment key={button.id}>
            <Button
              sx={{ textTransform: "none" }}
              onClick={() => {
                console.log(button.buttonKey);
              }}
            >
              {button.buttonLabel}
            </Button>
            <Divider orientation='horizontal' variant='middle' flexItem />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default BlogDrawer;
/*
see what this is ?: const activeBlog = blogs.find(blog => blog.key === activeKey);
with the help of find we will find the first activeKey blog and show it content
*/
