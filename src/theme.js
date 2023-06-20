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

        //apply style only to text button variant
        text: {
          padding: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: { backgroundColor: "#f9f9f9", color: "#000" },
        listbox: {
          backgroundColor: "#ffa62b", // Override button background color to orange
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { backgroundColor: "#f9f9f9", color: "#000" },
      },
    },

    MuiTypography: {
      styleOverrides: {
        //works as class name, and not the css sheet
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
    cyanColor: "#16697a",
  },
});
