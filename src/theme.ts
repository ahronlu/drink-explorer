import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
} as ThemeOptions);
