import { AppBar, Toolbar } from "@mui/material";

import { ErrorSnackbar } from "./components/ErrorSnackbar";
import { SearchBar } from "./components/SearchBar";
import { NavButtons } from "./components/NavButtons";
import { useNavbarState } from "./useNavbarState";

export const Navbar: React.FC = () => {
  const { error, open, setSearchTerm, suggestions, handleClose, handleSelect } = useNavbarState();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: 1, sm: 0 },
          padding: { xs: 1, sm: "0 24px" },
        }}
      >
        <NavButtons />

        <SearchBar
          suggestions={suggestions.map((drink) => drink.strDrink).filter((name): name is string => !!name)}
          onSearchChange={setSearchTerm}
          onSelect={handleSelect}
        />
      </Toolbar>

      <ErrorSnackbar error={error} open={open} onClose={handleClose} />
    </AppBar>
  );
};
