import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import { Navbar } from "./components/Navbar/Navbar";
import { AddDrink } from "./pages/AddDrink";
import { DrinkDetail } from "./pages/DrinkDetail/DrinkDetail";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink/:id" element={<DrinkDetail />} />
            <Route path="/add" element={<AddDrink />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};
