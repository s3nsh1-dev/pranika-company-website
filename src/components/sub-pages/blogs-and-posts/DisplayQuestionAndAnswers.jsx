import { Box, Typography } from "@mui/material";
import { SecondaryHeadingText } from "../../common/TitleTexts";

const DisplayQuestionAndAnswers = ({ questionBank }) => {
  const answerAsObject = (object) => {
    const content = [];
    for (const [key, value] of Object.entries(object)) {
      content.push(`${key}: ${value}`);
    }
    return (
      <Box component='ol' type='a'>
        {content.map((contentItem, index) => {
          return (
            <Typography key={contentItem} component='li'>
              {contentItem}
            </Typography>
          );
        })}
      </Box>
    );
  };
  const renderQuestionAndAnswers = questionBank.map((quesAns) => {
    return (
      <Box key={quesAns.id}>
        <Box>
          <SecondaryHeadingText fontWeight='bold'>
            Question {quesAns.id}: {quesAns.question}
          </SecondaryHeadingText>
        </Box>
        <Box component='details'>
          <Box component='summary'>Answer</Box>
          {typeof quesAns.answer === "string" ? (
            <Typography>{quesAns.answer}</Typography>
          ) : (
            answerAsObject(quesAns.answer)
          )}
        </Box>
      </Box>
    );
  });

  return <>{renderQuestionAndAnswers}</>;
};

export default DisplayQuestionAndAnswers;
