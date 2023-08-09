"use client";
import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C0BD1",
      light: "#7900FF",
    },
    secondary: {
      main: "#FF00E6",
      light: "#EE3EC9",
    },
    text: {
      primary: common.black,
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ["Gugi-Regular", "sans-serif"].join(","),
    h1: {
      color: "#F5F5FA",
      fontSize: 50,
      lineHeight: 1.375,
    },
    h2: {
      color: "#00002D",
      fontSize: 38,
      lineHeight: 1.45,
    },
    h3: {
      color: "#F5F5FA",
      fontSize: 20,
      lineHeight: 1.75,
    },
    h4: {
      fontSize: 18,
      lineHeight: 1.75,
    },
    h6: {
      fontSize: 16,
      lineHeight: 1.75,
    },
  },
});

export default theme;
