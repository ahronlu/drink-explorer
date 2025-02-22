import { TextField } from "@mui/material";

interface DrinkFormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

export const DrinkFormField: React.FC<DrinkFormFieldProps> = ({
  label,
  value,
  onChange,
  error,
  setError,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        setError?.("");
      }}
      sx={{ mt: 2 }}
      error={!!error && !value.trim().length}
    />
  );
};
