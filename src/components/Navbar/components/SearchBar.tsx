import { Autocomplete, TextField } from "@mui/material";

interface SearchBarProps {
  suggestions: string[];
  onSearchChange: (value: string) => void;
  onSelect: (_event: React.SyntheticEvent, value: string | null) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ suggestions, onSearchChange, onSelect }) => {
  return (
    <Autocomplete
      freeSolo
      options={suggestions}
      onInputChange={(_event, newValue) => onSearchChange(newValue)}
      onChange={onSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search drinks"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              padding: 0.5,
            },
          }}
        />
      )}
      sx={{ width: { xs: "100%", sm: 300 } }}
    />
  );
};
