import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  blogButtonLabels,
  blogDatabase,
} from "../../../constants/BlogsAndPostsConstants";
import BnPStaticDrawer from "./BnPStaticDrawer";
import BnPScrollableContainer from "./BnPScrollableContainer";

const BnPContainer = () => {
  const [activeKey, setActiveKey] = useState("DSBA");
  const [textBlogProp, setTextBlogProp] = useState(null);

  const handleActiveKeyChange = (currentKey) => {
    setActiveKey(currentKey);
  };

  useEffect(() => {
    // active key decide which blog to show
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
      <BnPStaticDrawer
        blogButtonLabels={blogButtonLabels}
        activeKey={activeKey}
        onKeyClick={handleActiveKeyChange}
      />
      <BnPScrollableContainer
        textBlogProp={textBlogProp}
        activeKey={activeKey}
      />
    </Grid>
  );
};

export default BnPContainer;
