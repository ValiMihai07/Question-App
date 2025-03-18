import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface QuestionCardProps {
  questionData: {
    question: string;
    answers: string[];
    correct: string;
  };
  nextQuestion: (
    result: "correct" | "incorrect",
    selectedAnswer: string
  ) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  nextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAnswered) {
      setSelectedAnswer((event.target as HTMLInputElement).value);
    }
  };

  const handleCheckAnswer = () => {
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questionData.correct) {
      nextQuestion("correct", selectedAnswer!);
    } else {
      nextQuestion("incorrect", selectedAnswer!);
    }
    setSelectedAnswer(null);
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
        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
          {questionData.answers.map((answer, index) => {
            const isSelected = selectedAnswer === answer;
            const isCorrectAnswer = answer === questionData.correct;
            const isIncorrectAnswer = isSelected && !isCorrectAnswer;

            return (
              <FormControlLabel
                key={index}
                value={answer}
                control={<Radio />}
                label={answer}
                sx={{
                  color: isAnswered
                    ? isCorrectAnswer
                      ? "lightgreen"
                      : isIncorrectAnswer
                      ? "lightcoral"
                      : "inherit"
                    : "inherit",
                  border: isAnswered
                    ? isCorrectAnswer
                      ? "2px solid green"
                      : isIncorrectAnswer
                      ? "2px solid red"
                      : "none"
                    : "none",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  padding: "4px",
                  "& .MuiRadio-root": {
                    color: isAnswered
                      ? isCorrectAnswer
                        ? "green"
                        : isIncorrectAnswer
                        ? "red"
                        : "inherit"
                      : "inherit",
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckAnswer}
        sx={{ mt: 2 }}
        disabled={isAnswered}
      >
        Verifică răspunsul
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

export default QuestionCard;
