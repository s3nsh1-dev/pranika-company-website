import { useState } from "react";
import { Paper, Box, Pagination, Typography } from "@mui/material";
import { caseStudies } from "../../../constants/PortfolioConstants";
import {
  PageTitleText,
  PrimaryHeadingText,
  SecondaryHeadingText,
  BoldSpan,
} from "../../common/TitleTexts";

const PortfolioCaseStudy = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const showCaseStudies = (
    <Paper
      key={caseStudies[pageNumber].id}
      sx={{ margin: "3%", padding: "20px" }}
      elevation={5}
    >
      <Box>
        <PrimaryHeadingText>
          <BoldSpan>Project: </BoldSpan>
          {caseStudies[pageNumber].project}
        </PrimaryHeadingText>
        {/* <img
          src={caseStudies[pageNumber].imgSrc}
          alt={caseStudies[pageNumber].project}
        /> */}
      </Box>
      <Box sx={{ margin: "30px 0px" }}>
        <SecondaryHeadingText>
          <BoldSpan>Customer: </BoldSpan>
          {caseStudies[pageNumber].customer}
        </SecondaryHeadingText>
        {caseStudies[pageNumber].tools.length > 1 && (
          <SecondaryHeadingText>
            <BoldSpan>Tools: </BoldSpan>
            {caseStudies[pageNumber].tools}
          </SecondaryHeadingText>
        )}
        {caseStudies[pageNumber].database > 1 && (
          <SecondaryHeadingText>
            <BoldSpan>Database: </BoldSpan>
            {caseStudies[pageNumber].database}
          </SecondaryHeadingText>
        )}
        {caseStudies[pageNumber].ETL_tools > 1 && (
          <SecondaryHeadingText>
            <BoldSpan>ETL Tools: </BoldSpan>
            {caseStudies[pageNumber].ETL_tools}
          </SecondaryHeadingText>
        )}
        {caseStudies[pageNumber].reportingAndVisualTools !== "" && (
          <SecondaryHeadingText>
            <BoldSpan>Reporting and Visualization Tools: </BoldSpan>
            {caseStudies[pageNumber].reportingAndVisualTools}
          </SecondaryHeadingText>
        )}
      </Box>
      <Box>
        <Typography>
          <BoldSpan>Description: </BoldSpan>
          {caseStudies[pageNumber].description}
        </Typography>
      </Box>
    </Paper>
  );

  const handlePageIndex = (event, value) => {
    setPageNumber(value - 1);
  };

  return (
    <Box>
      <PageTitleText>Our Success Stories</PageTitleText>
      {showCaseStudies}
      <Pagination
        count={caseStudies.length}
        variant='outlined'
        color='error'
        shape='rounded'
        onChange={handlePageIndex}
        sx={{ display: "flex", justifyContent: "center", margin: "10px" }}
      />
    </Box>
  );
};

export default PortfolioCaseStudy;
