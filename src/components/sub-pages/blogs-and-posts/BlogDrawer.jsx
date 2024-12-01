import React, { useState, Fragment, useEffect } from "react";
import { Divider, Grid, Box } from "@mui/material";
import {
  blogButtonLabels,
  blogDatabase,
} from "../../../constants/BlogsAndPostsConstants";
import TextBlogs from "./TextBlogs"; // send the active blog data to TextBlogs as props
import { NormButton } from "../../common/Buttons";

// Styles
const styledContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%", // Full width for the grid item
  height: "100%", // Full viewport height
  position: "absolute", // Makes it static relative to the page
  backgroundColor: "#7dcfff",
};

const scrollableContainer = {
  overflowY: "auto", // Enables vertical scrolling
  height: "100vh", // Matches the height of the drawer
  padding: "1rem", // Adds some padding for better spacing
  boxSizing: "border-box", // Ensures padding doesn't affect width
};

const BlogDrawer = () => {
  const [activeKey, setActiveKey] = useState("DSBA");
  const [textBlogProp, setTextBlogProp] = useState(null);

  const handleActiveKeyChange = (currentKey) => {
    setActiveKey(currentKey);
  };

  useEffect(() => {
    let tempBlog = blogDatabase.find((req) => {
      return req.blogKey === activeKey;
    });
    setTextBlogProp(tempBlog?.database || null); // Avoid errors if no match
    return () => {
      tempBlog = null;
    };
  }, [activeKey]);

  return (
    <Grid container columns={12} sx={{ height: "100vh" }}>
      {/* Static Drawer Section */}
      <Grid item xs={3} sx={styledContainer}>
        {blogButtonLabels.map((button) => (
          <Fragment key={button.id}>
            <NormButton
              sx={{ color: "#070066" }}
              onClick={() => handleActiveKeyChange(button.buttonKey)}
            >
              {button.buttonLabel}
            </NormButton>
            <Divider orientation='horizontal' variant='middle' flexItem />
          </Fragment>
        ))}
      </Grid>

      {/* Scrollable Content Section */}
      <Grid
        item
        xs={9}
        sx={{ marginLeft: "25%" /* Align to the right of drawer */ }}
      >
        <Box sx={scrollableContainer}>
          {textBlogProp ? (
            <TextBlogs blog={textBlogProp} />
          ) : (
            <div>Select a blog to see the content</div>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogDrawer;

// see what this is ?: const activeBlog = blogs.find(blog => blog.key === activeKey);
// with the help of find we will find the first activeKey blog and show it content

// Next Step:
// create and fill blogDataBase with blog data
// format it
// Then use this data to render blog post in BlogPost component

// const activeBlog = blogs.find(blog => blog.key === activeKey);
// will probably decide the blogDatabase data
// */
