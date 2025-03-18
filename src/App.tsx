import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import TestPage from "./components/test";
import TestMama from "./components/testMama";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startTest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/test");
  };

  const startFinancialDecisionsTest = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate("/testDeciziiFinanciare");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Teste
        </Typography>
        <Button variant="contained" color="primary" onClick={startTest}>
          STest ISF
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startFinancialDecisionsTest}
          sx={{ marginTop: 2 }}
        >
          Test Deciziile Financiare ale Firmei
        </Button>
      </Box>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/Question-App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/testDeciziiFinanciare" element={<TestMama />} />
      </Routes>
    </Router>
  );
};

export default App;
