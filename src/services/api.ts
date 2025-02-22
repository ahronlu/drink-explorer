import axios from "axios";
import { Drink } from "../types";

const API_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

/**
 * Fetches a list of cocktails.
 */
export const fetchCocktailList = async (): Promise<Drink[]> => {
  try {
    const response = await axios.get<{ drinks: Drink[] | null }>(`${API_BASE_URL}/filter.php?c=Cocktail`);
    return response.data.drinks ?? [];
  } catch (error) {
    throw new Error("Failed to fetch cocktails.");
  }
};

/**
 * Fetches drink search suggestions based on a search term.
 */
export const fetchDrinkSuggestions = async (searchTerm: string): Promise<Drink[]> => {
  if (searchTerm.trim().length < 2) {
    return [];
  }

  try {
    const response = await axios.get<{ drinks: Drink[] | null }>(
      `${API_BASE_URL}/search.php?s=${encodeURIComponent(searchTerm)}`
    );
    return response.data.drinks ?? [];
  } catch (error) {
    throw new Error("Failed to fetch drink suggestions.");
  }
};

/**
 * Fetches a single drink by ID.
 */
export const fetchDrinkById = async (drinkId: string): Promise<Drink | null> => {
  try {
    const response = await axios.get<{ drinks: Drink[] | null }>(
      `${API_BASE_URL}/lookup.php?i=${encodeURIComponent(drinkId)}`
    );
    return response.data.drinks?.[0] ?? null;
  } catch (error) {
    throw new Error("Failed to fetch drink details.");
  }
};
