import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import TestPage from "./components/test";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startTest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/test");
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
          Test ISF
        </Typography>
        <Button variant="contained" color="primary" onClick={startTest}>
          Start Test
        </Button>
      </Box>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
