import { Container, Typography, CircularProgress, Alert } from "@mui/material";

import { useCocktails } from "../../hooks";
import { DrinkList } from "./components/DrinkList";
import { PaginationControls } from "./components/PaginationControls";

export const Home: React.FC = () => {
  const { drinks, loading, error, page, setPage, totalPages } = useCocktails();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        🍸 Explore drinks
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <DrinkList drinks={drinks} />
      <PaginationControls page={page} setPage={setPage} totalPages={totalPages} />
    </Container>
  );
};
