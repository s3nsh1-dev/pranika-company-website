import React, { useState } from "react";
import { Box } from "@mui/material";
import DisplayQuestionAndAnswers from "./DisplayQuestionAndAnswers";
import { BlueButton } from "../../common/Buttons";

const QuestionBankSets = ({ questionBankSets }) => {
  const [questionBank, setQuestionBank] = useState([]);
  const handleQuestionBankChange = (currentSet) => {
    setQuestionBank(currentSet);
  };
  const renderQuestionSets = questionBankSets.map((qSet) => {
    return (
      <Box key={qSet.topicId}>
        <BlueButton
          onClick={() => {
            handleQuestionBankChange(qSet.topicQuestionnaire);
          }}
        >
          {qSet.topicTitle}
        </BlueButton>
      </Box>
    );
  });
  return (
    <>
      <Box>{renderQuestionSets}</Box>
      <DisplayQuestionAndAnswers questionBank={questionBank} />
    </>
  );
};

export default QuestionBankSets;
