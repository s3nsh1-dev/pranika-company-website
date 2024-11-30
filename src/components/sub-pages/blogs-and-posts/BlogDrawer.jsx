import React, { useState, Fragment } from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import {
  blogButtonLabels,
  blogDatabase,
} from "../../../constants/BlogsAndPostsConstants";
import TextBlogs from "./TextBlogs"; // send the active blog data to TextBlogs as props

export const styledContainer = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
  width: "20%",
};

const BlogDrawer = () => {
  // this will kep the track of key based on the buttons events
  const [activeKey, setActiveKey] = useState("DSBA");
  const handleActiveKeyChange = (currentKey) => {
    setActiveKey(currentKey);
  };
  console.log(activeKey);
  return (
    <Grid container columns={12}>
      {/* decide sx and md based on drawer proportion */}
      <Grid item sx={styledContainer}>
        {blogButtonLabels.map((button) => {
          return (
            <Fragment key={button.id}>
              <Button
                sx={{ textTransform: "none" }}
                onClick={() => handleActiveKeyChange(button.buttonKey)}
              >
                {button.buttonLabel}
              </Button>
              <Divider orientation='horizontal' variant='middle' flexItem />
            </Fragment>
          );
        })}
      </Grid>
      <Grid item>
        {/* decide sx and md based on drawer proportion */}
        <TextBlogs />
      </Grid>
    </Grid>
  );
};

export default BlogDrawer;
/*
see what this is ?: const activeBlog = blogs.find(blog => blog.key === activeKey);
with the help of find we will find the first activeKey blog and show it content

Next Step:
create and fill blogDataBase with blog data
format it
Then use this data to render blog post in BlogPost component

const activeBlog = blogs.find(blog => blog.key === activeKey);
will probably decide the blogDatabase data
*/
