import { Grid, Typography } from "@mui/material";

import { DrinkCard } from "./DrinkCard";

interface DrinkListProps {
  drinks: Array<{ idDrink?: string; strDrink?: string; name?: string; strDrinkThumb?: string }>;
}

export const DrinkList: React.FC<DrinkListProps> = ({ drinks }) => {
  return (
    <Grid container spacing={3}>
      {drinks.length === 0 ? (
        <Typography variant="h6">No drinks found.</Typography>
      ) : (
        drinks.map((drink, index) => (
          <DrinkCard
            key={drink.idDrink || `custom-${index}`}
            id={drink.idDrink || `custom-${index}`}
            name={drink.strDrink ?? drink.name ?? "Unnamed Drink"}
            image={drink.strDrinkThumb || "https://via.placeholder.com/150"}
          />
        ))
      )}
    </Grid>
  );
};
