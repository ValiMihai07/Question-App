import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

interface ReviewAnswersProps {
  questions: Question[];
  userAnswers: (string | null)[];
}

const ReviewAnswers: React.FC<ReviewAnswersProps> = ({
  questions,
  userAnswers,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Revizuieste raspunsurile
      </Typography>
      {questions.map((question, qIndex) => (
        <Box key={qIndex} mb={4} width="100%">
          <Typography variant="h6" component="h2" gutterBottom>
            {question.question}
          </Typography>
          <RadioGroup value={userAnswers[qIndex]}>
            {question.options.map((option, index) => {
              const isCorrectAnswer = option === question.answer;
              const isIncorrectAnswer = !isCorrectAnswer;

              return (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  sx={{
                    color: isCorrectAnswer
                      ? "lightgreen"
                      : isIncorrectAnswer
                      ? "lightcoral"
                      : "inherit",
                    border: isCorrectAnswer
                      ? "2px solid green"
                      : isIncorrectAnswer
                      ? "2px solid red"
                      : "none",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    padding: "4px",
                    "& .MuiRadio-root": {
                      color: isCorrectAnswer
                        ? "green"
                        : isIncorrectAnswer
                        ? "red"
                        : "inherit",
                    },
                  }}
                />
              );
            })}
          </RadioGroup>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewAnswers;
