import React from "react";
import { Pagination } from "@mui/material";

const caseStudiesPortfolioConstants = [
  {
    id: 0,
    imgSrc: "",
    project: "",
    customer: "",
    tools: "",
    database: "",
    ETL_tools: "",
    reportingAndVisualTools: "",
    description: "",
  },
];

const PortfolioCaseStudy = () => {
  return (
    <div>
      <Pagination count={3} variant='outlined' color='error' shape='rounded' />
    </div>
  );
};

export default PortfolioCaseStudy;
