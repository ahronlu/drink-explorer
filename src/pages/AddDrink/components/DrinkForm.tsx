import { useState } from "react";
import { Button } from "@mui/material";
import { DrinkFormField } from "./DrinkFormField";

interface DrinkFormProps {
  onSave: (name: string, ingredients: string[], instructions: string, image: string) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const DrinkForm: React.FC<DrinkFormProps> = ({ onSave, error, setError }) => {
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSave(name, ingredients, instructions, image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DrinkFormField label="* Name" value={name} onChange={setName} error={error} setError={setError} />
      <DrinkFormField
        label="* Ingredients (comma separated)"
        value={ingredients.join(", ")}
        onChange={(value) => setIngredients(value.split(",").map((ing) => ing.trim()))}
        error={error}
        setError={setError}
      />
      <DrinkFormField
        label="* Instructions"
        value={instructions}
        onChange={setInstructions}
        error={error}
        setError={setError}
      />
      <DrinkFormField label="Image URL (optional)" value={image} onChange={setImage} />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Save Drink
      </Button>
    </form>
  );
};
