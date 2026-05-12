import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
// import TestPage from "./components/test";
// import TestMama from "./components/testMama";
// import TestEM from "./components/TestEM";
// import TestConta from "./components/TestConta";
// import TestDFF from "./components/TestDFF";
// import TestCTB from "./components/TestCTB";
// import TestContaGestiune from "./components/TestContaGestiune";
// import TestAudit20 from "./components/TestAudit20";
// import TestAudit40 from "./components/TestAudit40";
// import TestAudit5 from "./components/TestAudit5";
// import AnalizaEconomica from "./components/AnalizaEconomica";
// import ContabilitateBancara from "./components/ContabilitateBancara";
// import EvaluareaIntreprinderii from "./components/EvaluareaIntreprinderii";
// import ControlDeGestiune from "./components/ControlDeGestiune";
import TestAAF from "./components/TestAnalizaFluxuluiFinanciar";
import TestCTI from "./components/testCTI";
import TestAF from "./components/testAF";
import TestFSCG from "./components/testFSCG";
import TestTPCA from "./components/TestTPCA";
import TestFiscalitate35 from "./components/TestFiscalitate35";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // const startTest = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/test");
  // };

  // const startFinancialDecisionsTest = (
  //   e: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   e.preventDefault();
  //   navigate("/testDeciziiFinanciare");
  // };

  // const startCTB = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testCTB");
  // };

  // const startDFF = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testDFF");
  // };

  // const startEM = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testEM");
  // };

  // const startConta = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testConta");
  // };

  // const startContaGestiune = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testContaGestiune");
  // };

  // const startAudit20 = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testAudit20");
  // };
  // const startAudit40 = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testAudit40");
  // };
  // const startAudit5 = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/testAudit5");
  // };
  // const analizaEconomica = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/analizaEconomica");
  // };
  // const contabilitateBancara = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/contabilitateBancara");
  // };
  // const evaluareaIntreprinderii = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/evaluareaIntreprinderii");
  // };
  // const controlDeGestiune = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   navigate("/controlDeGestiune");
  // };
  const testAAF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testAAF");
  };
  const testCTI = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testCTI");
  };
  const testAF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testAF");
  };
  const testFSCG = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testFSCG");
  };
  const testTPCA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testTPCA");
  };
  const testFiscalitate35 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/testFiscalitate35");
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
        {/* <Button variant="contained" color="primary" onClick={startTest}>
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
        <Button
          variant="contained"
          color="secondary"
          onClick={startConta}
          sx={{ marginTop: 2 }}
        >
          Test Conta
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startContaGestiune}
          sx={{ marginTop: 2 }}
        >
          Test Conta Gestiune
        </Button> */}
        {/* <Button
          variant="contained"
          color="secondary"
          onClick={startAudit20}
          sx={{ marginTop: 2 }}
        >
          Test Audit 20
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startAudit40}
          sx={{ marginTop: 2 }}
        >
          Test Audit 40
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={startAudit5}
          sx={{ marginTop: 2 }}
        >
          Test Audit 5
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={analizaEconomica}
          sx={{ marginTop: 2 }}
        >
          Analiza Economica
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={contabilitateBancara}
          sx={{ marginTop: 2 }}
        >
          Contabilitate bancara
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={evaluareaIntreprinderii}
          sx={{ marginTop: 2 }}
        >
          Evaluarea Intreprinderii
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={controlDeGestiune}
          sx={{ marginTop: 2 }}
        >
          Control De Gestiune
        </Button> */}
        <Button
          variant="contained"
          color="secondary"
          onClick={testAAF}
          sx={{ marginTop: 2 }}
        >
          Analiza Fluxului Financiar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={testCTI}
          sx={{ marginTop: 2 }}
        >
          Contabilitatea Tranzacțiilor Internaționale
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={testAF}
          sx={{ marginTop: 2 }}
        >
          Audit Financiar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={testFSCG}
          sx={{ marginTop: 2 }}
        >
          Fiscalitate și Gestiune Contabilă
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={testTPCA}
          sx={{ marginTop: 2 }}
        >
          Test TPCA
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={testFiscalitate35}
          sx={{ marginTop: 2 }}
        >
          Test Fiscalitate 35
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
        {/* <Route path="/test" element={<TestPage />} />
        <Route path="/testDeciziiFinanciare" element={<TestMama />} />
        <Route path="/testCTB" element={<TestCTB />} />
        <Route path="/testDFF" element={<TestDFF />} />
        <Route path="/testEM" element={<TestEM />} />
        <Route path="/testConta" element={<TestConta />} />
        <Route path="/testContaGestiune" element={<TestContaGestiune />} /> */}
        {/* <Route path="/testAudit20" element={<TestAudit20 />} />
        <Route path="/testAudit40" element={<TestAudit40 />} />
        <Route path="/testAudit5" element={<TestAudit5 />} />
        <Route path="/analizaEconomica" element={<AnalizaEconomica />} />
        
        <Route path="/contabilitateBancara" element={<ContabilitateBancara />} />
        <Route path="/evaluareaIntreprinderii" element={<EvaluareaIntreprinderii />} />
        <Route path="/controlDeGestiune" element={<ControlDeGestiune />} /> */}
        <Route path="/testAAF" element={<TestAAF />} />
        <Route path="/testCTI" element={<TestCTI />} />
        <Route path="/testAF" element={<TestAF />} />
        <Route path="/testFSCG" element={<TestFSCG />} />
        <Route path="/testTPCA" element={<TestTPCA />} />
        <Route path="/testFiscalitate35" element={<TestFiscalitate35 />} />
      </Routes>
    </Router>
  );
};

export default App;
