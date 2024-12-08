import { Grid, Box } from "@mui/material";
import TextBlogs from "./TextBlogs";
import QuestionBankSets from "./QuestionBankSets";
import { blogDatabase } from "../../../constants/BlogsAndPostsConstants";

const scrollableContainer = {
  paddingTop: "1rem",
  overflowY: "auto",
  height: "80vh",
};

const BnPScrollableContainer = ({ textBlogProp, activeKey }) => {
  const questionBankCollections = blogDatabase.find((dataKey) => {
    return dataKey.blogKey === "questionBank001";
  });

  return (
    <Grid item md={9} xs={12}>
      <Box sx={scrollableContainer}>
        {textBlogProp ? (
          <TextBlogs blog={textBlogProp} />
        ) : activeKey === "questionBank" ? (
          <QuestionBankSets
            questionBankSets={questionBankCollections.database}
          />
        ) : (
          <Box>Select a blog to see the content</Box>
        )}
      </Box>
    </Grid>
  );
};

export default BnPScrollableContainer;
