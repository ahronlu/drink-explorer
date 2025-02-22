export interface Drink {
  idDrink: string;
  name?: string;
  ingredients?: string[];
  instructions?: string;
  strDrinkThumb?: string;
  strDrink?: string;
  strInstructions?: string;
}

export interface UseDrinkDetailReturn {
  drink: Drink | null;
  loading: boolean;
  error: string | null;
}

export interface UseCocktailsReturn {
  drinks: Drink[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export interface UseDrinkSearchReturn {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  suggestions: Drink[];
  error: string | null;
}

export interface UseNavbarStateReturn {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  suggestions: Drink[];
  error: string | null;
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  handleSelect: (_event: React.SyntheticEvent, value: string | null) => void;
}
