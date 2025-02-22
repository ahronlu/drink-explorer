import { Typography } from "@mui/material";

interface DrinkInstructionsProps {
  instructions?: string;
}

export const DrinkInstructions: React.FC<DrinkInstructionsProps> = ({ instructions }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Instructions:
      </Typography>
      <Typography variant="body1">{instructions || "No instructions available."}</Typography>
    </>
  );
};
