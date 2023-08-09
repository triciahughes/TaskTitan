"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      main: "#FFFFFF",
      light: "#D7D7D7",
    },
    primary: {
      main: "#66347F",
      light: "#845C98",
    },
    secondary: {
      main: "#9E4784",
      light: "#B16B9C",
    },
    info: {
      main: "#C47AFF",
      light: "#CF94FF",
    },
    error: {
      main: "#D32F2F",
      light: "#DB5858",
    },
    success: {
      main: "#C8E4B2",
    },
    warning: {
      main: "#efd862",
      light: "#F2DF81",
    },
    edit: {
      main: "#514a85",
      light: "#8CABFF",
    },
  },
});

export default theme;
