import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { fetchDrinkById } from "../services";
import { Drink, UseDrinkDetailReturn } from "../types";

export const useDrinkDetail = (id?: string): UseDrinkDetailReturn => {
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [customDrinks] = useLocalStorage<Drink[]>("customDrinks", []);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("Invalid drink ID.");
      return;
    }

    const loadDrink = async () => {
      try {
        const localDrink = customDrinks.find((d) => d.idDrink === id);

        if (localDrink) {
          setDrink(localDrink);
        } else {
          const fetchedDrink = await fetchDrinkById(id);
          if (fetchedDrink) {
            setDrink(fetchedDrink);
          } else {
            setError("Drink not found.");
          }
        }
      } catch (error) {
        setError("An error occurred while fetching the drink.");
      } finally {
        setLoading(false);
      }
    };

    loadDrink();
  }, [id, customDrinks]);

  return { drink, loading, error };
};
