import { useState } from "react";
import { Paper, Box, Pagination, Typography } from "@mui/material";
import { caseStudies } from "../../../constants/PortfolioConstants";

const PortfolioCaseStudy = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const showCaseStudies = (
    <Paper key={caseStudies[pageNumber].id} sx={{ margin: "40px" }}>
      <Box>
        <Typography>Project: {caseStudies[pageNumber].project}</Typography>
        <img
          src={caseStudies[pageNumber].imgSrc}
          alt={caseStudies[pageNumber].project}
        />
      </Box>
      <Box>
        <Typography>Customer: {caseStudies[pageNumber].customer}</Typography>
        {caseStudies[pageNumber].tools.length > 1 && (
          <Typography>Tools: {caseStudies[pageNumber].tools}</Typography>
        )}
        {caseStudies[pageNumber].database > 1 && (
          <Typography>Database: {caseStudies[pageNumber].database}</Typography>
        )}
        {caseStudies[pageNumber].ETL_tools > 1 && (
          <Typography>
            ETL Tools: {caseStudies[pageNumber].ETL_tools}
          </Typography>
        )}
        {caseStudies[pageNumber].reportingAndVisualTools !== "" && (
          <Typography>
            Reporting and Visualization Tools:{" "}
            {caseStudies[pageNumber].reportingAndVisualTools}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography>{caseStudies[pageNumber].description}</Typography>
      </Box>
    </Paper>
  );

  const handlePageIndex = (event, value) => {
    setPageNumber(value - 1);
  };

  return (
    <div>
      {showCaseStudies}
      <Pagination
        count={caseStudies.length}
        variant='outlined'
        color='error'
        shape='rounded'
        onChange={handlePageIndex}
      />
    </div>
  );
};

export default PortfolioCaseStudy;
