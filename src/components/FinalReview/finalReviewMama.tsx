import React from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";

type Question = {
  question: string;
  answers: string[];
  correct: string[];
};

interface FinalReviewMamaProps {
  questions: Question[];
  userAnswers: (string[] | null)[];
}

const FinalReviewMama: React.FC<FinalReviewMamaProps> = ({
  questions,
  userAnswers,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      sx={{
        maxWidth: "800px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#000", // Fundal negru
        color: "#fff", // Text alb pentru contrast
        margin: "16px auto",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Revizuiește răspunsurile
      </Typography>
      {questions.map((question, qIndex) => (
        <Box key={qIndex} mb={4} width="100%">
          <Typography variant="h6" component="h2" gutterBottom>
            {question.question}
          </Typography>
          {question.answers.map((answer, index) => {
            const isCorrectAnswer = question.correct.includes(answer);
            const isSelected = userAnswers[qIndex]?.includes(answer) || false;

            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={isSelected}
                    disabled
                    sx={{
                      color: "#fff", // Ensure checkbox remains white
                      "&.Mui-checked": {
                        color: isCorrectAnswer
                          ? "lightgreen" // Correct answers in green
                          : "lightcoral", // Incorrect answers in red
                      },
                      "& .MuiSvgIcon-root": {
                        color: isCorrectAnswer
                          ? "lightgreen" // Correct answers in green
                          : isSelected
                          ? "lightcoral" // Incorrect answers in red
                          : "#fff", // Default white
                      },
                    }}
                  />
                }
                label={answer}
                sx={{
                  display: "block",
                  marginBottom: "8px",
                  color: isCorrectAnswer
                    ? "lightgreen" // Correct answers in green
                    : isSelected
                    ? "lightcoral" // Incorrect selected answers in red
                    : "#fff", // Default white text
                  backgroundColor: isCorrectAnswer
                    ? "rgba(0, 128, 0, 0.1)" // Light green background for correct answers
                    : isSelected
                    ? "rgba(255, 0, 0, 0.1)" // Light red background for incorrect answers
                    : "transparent",
                  border: isCorrectAnswer
                    ? "2px solid green"
                    : isSelected
                    ? "2px solid red"
                    : "none",
                  borderRadius: "4px",
                  padding: "4px",
                  "& .MuiFormControlLabel-label": {
                    color: "#fff", // Explicitly set label text to white
                  },
                  "&.Mui-disabled .MuiFormControlLabel-label": {
                    color: "#fff", // Ensure label text remains white when disabled
                  },
                }}
              />
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

export default FinalReviewMama;
