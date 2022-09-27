import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#184848',
        light: '#f0f0d8',
        dark: '#a8c030'
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#184848',
        light: '#006060',
        dark: '#007878',
      },
    },
  });