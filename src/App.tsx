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
import TestEM from "./components/TestEM";
import TestDFF from "./components/TestDFF";
import TestCTB from "./components/TestCTB";

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

  const startCTB = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testCTB");
  };

  const startDFF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testDFF");
  };

  const startEM = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testEM");
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
        <Button
          variant="contained"
          color="secondary"
          onClick={startCTB}
          sx={{ marginTop: 2 }}
        >
          Test CTB
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startDFF}
          sx={{ marginTop: 2 }}
        >
          Test DFF
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startEM}
          sx={{ marginTop: 2 }}
        >
          Test EM
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
        <Route path="/testCTB" element={<TestCTB />} />
        <Route path="/testDFF" element={<TestDFF />} />
        <Route path="/testEM" element={<TestEM />} />
      </Routes>
    </Router>
  );
};

export default App;
