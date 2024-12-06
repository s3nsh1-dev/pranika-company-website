import React, { useState } from "react";
import { Box } from "@mui/material";
import DisplayQuestionAndAnswers from "./DisplayQuestionAndAnswers";
import { BlueBorderButton } from "../../common/Buttons";

const QuestionBankSets = ({ questionBankSets }) => {
  const [quesState, setQuesState] = useState({
    prevButton: "",
    questionBank: [],
    selected: false,
  });

  const handleQuestionBankChange = ({ bankData, buttonId }) => {
    if (quesState.selected === false) {
      if (quesState.prevButton !== buttonId) {
        setQuesState({
          prevButton: buttonId,
          questionBank: bankData,
          selected: true,
        });
      }
    } else if (
      quesState.prevButton !== buttonId &&
      quesState.selected === true
    ) {
      setQuesState({
        prevButton: buttonId,
        questionBank: bankData,
        selected: true,
      });
    } else {
      setQuesState({
        prevButton: "",
        questionBank: [],
        selected: false,
      });
    }
  };
  const renderQuestionSets = questionBankSets.map((qSet) => {
    return (
      <Box key={qSet.topicId}>
        <BlueBorderButton
          onClick={() => {
            handleQuestionBankChange({
              bankData: qSet.topicQuestionnaire,
              buttonId: qSet.topicId,
            });
          }}
        >
          {qSet.topicTitle}
        </BlueBorderButton>
      </Box>
    );
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "1%" }}>
      <Box sx={{}}>{renderQuestionSets}</Box>
      <Box sx={{ marginTop: "20px" }}>
        {quesState.selected &&
        quesState.prevButton !== "" &&
        quesState.questionBank.length > 1 ? (
          <DisplayQuestionAndAnswers questionBank={quesState.questionBank} />
        ) : quesState.selected &&
          quesState.prevButton !== "" &&
          quesState.questionBank.length < 1 ? (
          "Coming Soon..."
        ) : (
          " Select Your Topic for Question Bank"
        )}
      </Box>
    </Box>
  );
};

export default QuestionBankSets;
