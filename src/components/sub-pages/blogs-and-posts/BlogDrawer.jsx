import React, { useState, Fragment, useEffect } from "react";
import { Divider, Grid, Box } from "@mui/material";
import {
  blogButtonLabels,
  blogDatabase,
} from "../../../constants/BlogsAndPostsConstants";
import TextBlogs from "./TextBlogs";
import { NormButton } from "../../common/Buttons";

const styledContainer = {
  display: "flex",
  flexDirection: "column", // this gives button the whole size of xs{3} grid
  backgroundColor: "#b0d6ff",
};

const scrollableContainer = {
  paddingTop: "1rem",
  overflowY: "auto",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const highLight = {
  color: "#070066",
  margin: "5px",
  fontSize: "18px",
  // fontWeight: "bold",
  textShadow: "2px 2px white",
};
const noHighLight = {
  color: "#070066",
  margin: "5px",
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
    <Grid container columns={12}>
      {/* Static Drawer Section */}
      <Grid item md={3} sx={styledContainer} xs={12}>
        {blogButtonLabels.map((button) => (
          <Fragment key={button.id}>
            <NormButton
              sx={activeKey === button.buttonKey ? highLight : noHighLight}
              onClick={() => handleActiveKeyChange(button.buttonKey)}
            >
              {button.buttonLabel}
            </NormButton>
            <Divider orientation='horizontal' variant='middle' flexItem />
          </Fragment>
        ))}
      </Grid>

      {/* Scrollable Content Section */}
      <Grid item md={9} xs={12}>
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
