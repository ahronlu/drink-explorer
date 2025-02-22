import { Container, Typography, Alert } from "@mui/material";

import { DrinkForm } from "./components/DrinkForm";
import { useSaveDrink } from "../../hooks/useSaveDrink";

export const AddDrink: React.FC = () => {
  const { handleSave, error, setError } = useSaveDrink();

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5">Add a new drink</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <DrinkForm onSave={handleSave} error={error} setError={setError} />
    </Container>
  );
};
