import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuestionCardMama from "./QuestionCard/questionCardMama";
import questionsMama from "../data/questionsMama.json";
import FinalReviewMama from "./FinalReview/finalReviewMama"; // Import the review component

type Question = {
  question: string;
  answers: string[];
  correct: string[];
};

const TestMama: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(string[] | null)[]>([]);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    const formattedQuestions = questionsMama.map((q) => ({
      question: q.question,
      answers: q.answers,
      correct: Array.isArray(q.correct) ? q.correct : [q.correct],
    }));
    const shuffledQuestions = formattedQuestions.sort(
      () => Math.random() - 0.5
    ); // Shuffle questions
    setSelectedQuestions(shuffledQuestions);
    setUserAnswers(new Array(shuffledQuestions.length).fill(null));
  }, []);

  const handleNextQuestion = (selectedAnswers: string[]) => {
    const correctAnswers = selectedAnswers.filter((answer) =>
      selectedQuestions[currentQuestionIndex].correct.includes(answer)
    );
    const incorrectAnswers = selectedAnswers.filter(
      (answer) =>
        !selectedQuestions[currentQuestionIndex].correct.includes(answer)
    );

    setCorrectCount((prev) => prev + correctAnswers.length);
    setIncorrectCount((prev) => prev + incorrectAnswers.length);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswers;
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  const handleStartNew = () => {
    navigate("/testDeciziiFinanciare", { replace: true });
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
        selectedQuestions[currentQuestionIndex] ? (
          <>
            <Typography variant="h6" component="h1" gutterBottom align="center">
              Test Deciziile Financiare ale Firmei
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <span style={{ color: "lightgreen" }}>
                Corecte: {correctCount}
              </span>
              ,{" "}
              <span style={{ color: "lightcoral" }}>
                Greșite: {incorrectCount}
              </span>
              , Total: {selectedQuestions.length}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Răspunde la toate întrebările. Poți selecta mai multe răspunsuri
              corecte.
            </Typography>
            <QuestionCardMama
              questionData={selectedQuestions[currentQuestionIndex]}
              nextQuestion={handleNextQuestion}
              allowMultipleAnswers={
                selectedQuestions[currentQuestionIndex].correct.length > 1
              }
            />
          </>
        ) : (
          <Typography variant="h6" component="h1" gutterBottom align="center">
            Încărcare întrebări...
          </Typography>
        )
      ) : (
        <>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            Test finalizat! Verifică răspunsurile tale.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} align="center">
            <span style={{ color: "lightgreen" }}>Corecte: {correctCount}</span>
            ,{" "}
            <span style={{ color: "lightcoral" }}>
              Greșite: {incorrectCount}
            </span>
            , Total: {selectedQuestions.length}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartNew}
            sx={{ mt: 2 }}
          >
            Începe un test nou
          </Button>
          <FinalReviewMama
            questions={selectedQuestions}
            userAnswers={userAnswers}
          />
        </>
      )}
    </Box>
  );
};

export default TestMama;
