import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "40px",
          padding: "10px 36px",
          fontSize: "14px",
          fontWeight: "bold", // Override button text color to white
          // backgroundColor: "#ffa62b", // Override button background color to orange
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        semiBold: {
          fontWeight: 600,
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    orange: {
      main: "#ffa62b",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#ffa62b",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
    greyColor: "#737373",
    darkBlue: "#252b42",
  },
});
