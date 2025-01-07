import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer/timer";
import QuestionCard from "./QuestionCard/questionCard";
import questions from "../data/questions.json";
import ReviewAnswers from "./FinalReview/finalReview";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export interface QuestionData {
  question: string;
  answers: string[];
  correct: string;
}

const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [messageReview, setMessageReview] = useState("");

  useEffect(() => {
    // Shuffle and select 40 questions
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    const selected = shuffledQuestions.slice(0, 40);
    const formattedQuestions = selected.map((q: QuestionData) => ({
      question: q.question,
      options: q.answers,
      answer: q.correct,
    }));
    setSelectedQuestions(formattedQuestions);
    setUserAnswers(new Array(40).fill(null));
  }, []);

  const finishTest = (passed: boolean) => {
    setIsTestFinished(true);
    if (passed) {
      setMessageReview("Felicitari! Ai promovat testul!");
    } else {
      setMessageReview("Ai picat testul! Mai mult noroc data viitoare!");
    }
  };

  const handleTimeUp = () => {
    finishTest(false);
  };

  const handleNextQuestion = (
    result: "correct" | "incorrect",
    selectedAnswer: string
  ) => {
    if (result === "correct") {
      setScore(score + 1);
    } else if (result === "incorrect") {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishTest(score >= 28);
    }
  };

  const handleStartNew = () => {
    navigate("/test", { replace: true });
    window.location.reload();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
    >
      {!isTestFinished ? (
        <>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            Test cu 40 de intrebari - 40 de minute
          </Typography>
          <Typography
            variant="subtitle1"
            component="h1"
            gutterBottom
            align="center"
          >
            Minim 28 de intrebari corecte pentru a promova
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <span style={{ color: "lightgreen" }}>Corecte: {score}</span>,{" "}
            <span style={{ color: "lightcoral" }}>
              Greșite: {incorrectAnswers}
            </span>
            , Total: {selectedQuestions.length}
          </Typography>
          <Timer onTimeUp={handleTimeUp} />
          <QuestionCard
            questionData={questions[currentQuestionIndex]}
            nextQuestion={handleNextQuestion}
          />
        </>
      ) : (
        <>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            {messageReview}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartNew}
            sx={{ mt: 2 }}
          >
            Incepe un test nou
          </Button>
          <ReviewAnswers
            questions={selectedQuestions}
            userAnswers={userAnswers}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartNew}
            sx={{ mt: 2 }}
          >
            Incepe un test nou
          </Button>
        </>
      )}
    </Box>
  );
};

export default TestPage;
