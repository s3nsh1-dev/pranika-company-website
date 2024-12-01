import React from "react";
import SecondryNavbar from "../../home-page/SecondryNavbar";
import PrimaryFooter from "../../home-page/PrimaryFooter";
import BlogDrawer from "./BlogDrawer";

export default function BlogsAndPosts() {
  return (
    <>
      <SecondryNavbar />
      <BlogDrawer />
      <PrimaryFooter />
    </>
  );
}
