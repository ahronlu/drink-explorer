import { Snackbar, Alert } from "@mui/material";

interface ErrorSnackbarProps {
  error: string | null;
  open: boolean;
  onClose: () => void;
}

export const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({ error, open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity="error" onClose={onClose} variant="filled">
        {error}
      </Alert>
    </Snackbar>
  );
};
