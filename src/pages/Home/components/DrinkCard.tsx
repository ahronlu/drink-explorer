import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Tooltip, Typography, Grid } from "@mui/material";

interface DrinkCardProps {
  id: string;
  name: string;
  image: string;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ id, name, image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Link to={`/drink/${id}`}>
          <CardMedia component="img" height="200" image={image} alt={name} />
          <CardContent sx={{ pb: "16px !important" }}>
            <Tooltip title={name}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                }}
              >
                {name}
              </Typography>
            </Tooltip>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};
