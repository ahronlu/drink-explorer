import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Drink } from "../types";

export const useSaveDrink = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const [savedDrinks, setSavedDrinks] = useLocalStorage<Drink[]>("customDrinks", []);

  const handleSave = (name: string, ingredients: string[], instructions: string, image: string) => {
    if (!name.trim() || ingredients.length === 0 || !instructions.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const newDrink: Drink = {
      idDrink: `custom-${Date.now()}`,
      strDrink: name.trim(),
      strInstructions: instructions.trim(),
      strDrinkThumb: image.trim() || "https://via.placeholder.com/150",
      ingredients: ingredients.filter((ing) => ing.trim() !== ""),
    };

    setSavedDrinks([...savedDrinks, newDrink]);

    navigate("/");
  };

  return { handleSave, error, setError };
};
