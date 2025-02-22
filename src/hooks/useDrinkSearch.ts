import { useState, useEffect, useCallback } from "react";

import { fetchDrinkSuggestions } from "../services";
import { Drink, UseDrinkSearchReturn } from "../types";

export const useDrinkSearch = (): UseDrinkSearchReturn => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Drink[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = useCallback(async () => {
    if (searchTerm.length < 1) {
      setSuggestions([]);
      return;
    }

    try {
      const drinks = await fetchDrinkSuggestions(searchTerm);
      setSuggestions(drinks || []);
    } catch (error) {
      setSuggestions([]);
      setError("Failed to fetch drink suggestions.");
    }
  }, [searchTerm]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, fetchSuggestions]);

  return { error, setSearchTerm, suggestions };
};
