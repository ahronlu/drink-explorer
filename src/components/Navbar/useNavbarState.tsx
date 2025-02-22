import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDrinkSearch } from "../../hooks";
import { UseNavbarStateReturn } from "../../types";

export const useNavbarState = (): UseNavbarStateReturn => {
  const navigate = useNavigate();
  const { error, setSearchTerm, suggestions } = useDrinkSearch();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSelect = (_event: React.SyntheticEvent, value: string | null) => {
    if (value) {
      const selectedDrink = suggestions.find((c) => c.strDrink === value);
      if (selectedDrink) {
        navigate(`/drink/${selectedDrink.idDrink}`);
      }
    }
  };

  return { searchTerm: "", setSearchTerm, suggestions, error, open, handleClose, handleSelect };
};
