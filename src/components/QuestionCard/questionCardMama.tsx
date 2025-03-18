import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface QuestionCardMamaProps {
  questionData: {
    question: string;
    answers: string[];
    correct: string[];
  };
  nextQuestion: (selectedAnswers: string[]) => void;
  allowMultipleAnswers: boolean;
}

const QuestionCardMama: React.FC<QuestionCardMamaProps> = ({
  questionData,
  nextQuestion,
  allowMultipleAnswers,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() => {
    // Remove shuffling logic
    setShuffledAnswers(questionData.answers);
  }, [questionData]);

  const handleAnswerChange = (answer: string) => {
    if (allowMultipleAnswers) {
      setSelectedAnswers((prev) =>
        prev.includes(answer)
          ? prev.filter((a) => a !== answer)
          : [...prev, answer]
      );
    } else {
      setSelectedAnswers([answer]);
    }
  };

  const handleCheckAnswer = () => {
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    nextQuestion(selectedAnswers);
    setSelectedAnswers([]);
    setIsAnswered(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      sx={{
        maxWidth: "600px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#000", // Fundal negru
        color: "#fff", // Text alb pentru contrast
        margin: "16px auto",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {questionData.question}
      </Typography>
      <Box>
        {allowMultipleAnswers ? (
          shuffledAnswers.map((answer, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedAnswers.includes(answer)}
                  onChange={() => handleAnswerChange(answer)}
                  disabled={isAnswered}
                  sx={{
                    color: "#fff", // Ensure checkbox remains white
                    "&.Mui-checked": {
                      color: isAnswered
                        ? questionData.correct.includes(answer)
                          ? "lightgreen" // Correct answers in green
                          : "lightcoral" // Incorrect answers in red
                        : "lightblue",
                    },
                    "& .MuiSvgIcon-root": {
                      color: isAnswered
                        ? questionData.correct.includes(answer)
                          ? "lightgreen" // Correct answers in green
                          : selectedAnswers.includes(answer)
                          ? "lightcoral" // Incorrect answers in red
                          : "#fff" // Default white
                        : "#fff", // Default white
                    },
                  }}
                />
              }
              label={answer}
              sx={{
                display: "block",
                marginBottom: "8px",
                color: isAnswered
                  ? questionData.correct.includes(answer)
                    ? "lightgreen" // Correct answers in green
                    : selectedAnswers.includes(answer)
                    ? "lightcoral" // Incorrect selected answers in red
                    : "#fff" // Default white text
                  : "#fff", // Default white text
                backgroundColor: isAnswered
                  ? questionData.correct.includes(answer)
                    ? "rgba(0, 128, 0, 0.1)" // Light green background for correct answers
                    : selectedAnswers.includes(answer)
                    ? "rgba(255, 0, 0, 0.1)" // Light red background for incorrect answers
                    : "transparent"
                  : "transparent",
                border: isAnswered
                  ? questionData.correct.includes(answer)
                    ? "2px solid green"
                    : selectedAnswers.includes(answer)
                    ? "2px solid red"
                    : "none"
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
          ))
        ) : (
          <RadioGroup
            value={selectedAnswers[0] || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
          >
            {shuffledAnswers.map((answer, index) => (
              <FormControlLabel
                key={index}
                value={answer}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "lightblue",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#fff", // Cerculețele devin albe
                      },
                    }}
                  />
                }
                label={answer}
                sx={{
                  color: isAnswered
                    ? questionData.correct.includes(answer)
                      ? "lightgreen"
                      : selectedAnswers.includes(answer)
                      ? "lightcoral"
                      : "inherit"
                    : "inherit",
                  border: isAnswered
                    ? questionData.correct.includes(answer)
                      ? "2px solid green"
                      : selectedAnswers.includes(answer)
                      ? "2px solid red"
                      : "none"
                    : "none",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  padding: "4px",
                }}
              />
            ))}
          </RadioGroup>
        )}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckAnswer}
        sx={{ mt: 2 }}
        disabled={isAnswered}
      >
        Verifică răspunsurile
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleNextQuestion}
        sx={{ mt: 2 }}
        disabled={!isAnswered}
      >
        Următoarea întrebare
      </Button>
    </Box>
  );
};

export default QuestionCardMama;
