import { Typography } from "@mui/material";

import { Drink } from "../../../types";

interface DrinkIngredientsProps {
  drink: Drink;
}

export const DrinkIngredients: React.FC<DrinkIngredientsProps> = ({ drink }) => {
  const ingredients: string[] = drink.ingredients
    ? drink.ingredients
    : (Array.from({ length: 15 }, (_, i) => {
        const ingredient = drink[`strIngredient${i + 1}` as keyof Drink] as string | null;
        const measure = drink[`strMeasure${i + 1}` as keyof Drink] as string | null;
        return ingredient ? `${measure ? measure : ""} ${ingredient}`.trim() : null;
      }).filter(Boolean) as string[]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
};
