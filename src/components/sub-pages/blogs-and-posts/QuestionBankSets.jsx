import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import DisplayQuestionAndAnswers from "./DisplayQuestionAndAnswers";
import { NormButton } from "../../common/Buttons";

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
      <NormButton
        variant={
          quesState.prevButton === qSet.topicId ? "contained" : "outlined"
        }
        color='info'
        key={qSet.topicId}
        onClick={() => {
          handleQuestionBankChange({
            bankData: qSet.topicQuestionnaire,
            buttonId: qSet.topicId,
          });
        }}
        sx={{ margin: "5px" }}
      >
        {qSet.topicTitle}
      </NormButton>
    );
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "1%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {renderQuestionSets}
      </Box>
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
