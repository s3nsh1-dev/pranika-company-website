import React from "react";
import ShowServiceSubTitle from "../branch-pages/ShowServiceSubTitle";
import SecondryNavbar from "../home-page/SecondryNavbar";
import PrimaryFooter from "../home-page/PrimaryFooter";
import coverImage from "../../images/data-operations-cover.jpg";

const title = "Data Operations";
const subtitle =
  "Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle";
export default function ShowDataOperations() {
  return (
    <>
      <SecondryNavbar />
      <ShowServiceSubTitle
        image={coverImage}
        title={title}
        subtitle={subtitle}
      />
      <PrimaryFooter />
    </>
  );
}
