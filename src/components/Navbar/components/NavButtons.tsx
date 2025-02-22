import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export const NavButtons: React.FC = () => {
  return (
    <Box>
      <Button component={NavLink} to="/" color="inherit" startIcon={<HomeIcon />}>
        Home
      </Button>
      <Button component={NavLink} to="/add" color="inherit" startIcon={<AddIcon />}>
        Add Drink
      </Button>
    </Box>
  );
};
