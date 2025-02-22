import { useParams } from "react-router-dom";
import { Container, CircularProgress, Alert, Typography } from "@mui/material";

import { useDrinkDetail } from "../../hooks";
import { DrinkDetailCard } from "./components/DrinkDetailCard";

export const DrinkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { drink, loading, error } = useDrinkDetail(id);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", my: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: "center", my: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!drink) {
    return (
      <Container sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h5">No drink details available.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ my: 4 }}>
      <DrinkDetailCard drink={drink} />
    </Container>
  );
};
