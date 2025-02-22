import { useState, useEffect } from "react";

import { fetchCocktailList } from "../services";
import { Drink, UseCocktailsReturn } from "../types";
import { useLocalStorage } from "./useLocalStorage";

const ITEMS_PER_PAGE = 6;

export const useCocktails = (): UseCocktailsReturn => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const [customDrinks] = useLocalStorage<Drink[]>("customDrinks", []);

  useEffect(() => {
    const loadDrinks = async () => {
      try {
        const apiDrinks: Drink[] = await fetchCocktailList();
        setDrinks([...customDrinks, ...apiDrinks]);
      } catch (error) {
        setError("Failed to load drinks.");
      } finally {
        setLoading(false);
      }
    };

    loadDrinks();
  }, [customDrinks]);

  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(drinks.length / ITEMS_PER_PAGE);

  return { drinks: currentDrinks, loading, error, page, setPage, totalPages };
};
