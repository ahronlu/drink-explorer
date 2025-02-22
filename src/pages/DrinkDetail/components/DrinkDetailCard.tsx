import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Drink } from "../../../types";
import { DrinkIngredients } from "./DrinkIngredients";
import { DrinkInstructions } from "./DrinkInstructions";

interface DrinkDetailCardProps {
  drink: Drink;
}

export const DrinkDetailCard: React.FC<DrinkDetailCardProps> = ({ drink }) => {
  return (
    <Card>
      <CardMedia component="img" height="400" image={drink.strDrinkThumb} alt={drink.strDrink} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {drink.strDrink}
        </Typography>
        <DrinkIngredients drink={drink} />
        <DrinkInstructions instructions={drink.strInstructions} />
      </CardContent>
    </Card>
  );
};
