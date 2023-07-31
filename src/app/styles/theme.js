import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7400B8",
      light: "#5E60CE",
    },
    secondary: {
      main: "#64DFDF",
      light: "#80FFDB",
    },
    text: {
      primary: common.black,
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    h1: {
      fontFamily: "Raleway",
      fontSize: 25,
      lineHeight: 1.375,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: 24,
      lineHeight: 1.45,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: 20,
      lineHeight: 1.75,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: 16,
      lineHeight: 2.18,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: 14,
      lineHeight: 2.18,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: "Raleway",
      fontSize: 14,
      lineHeight: 1.5714,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: "HelveticaNeueRegular",
      fontSize: 18,
      lineHeight: 1.333,
      letterSpacing: 0,
    },
    caption: {
      fontFamily: "ObelixProBold",
      fontSize: 30,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: Raleway;
          font-display: swap;
          font-style: normal;
          src: local('Raleway'),
            url(/fonts/typography/Raleway.woff2) format('woff2');
        }
        @font-face {
          font-family: HelveticaNeueBold;
          font-display: swap;
          font-style: normal;
          src: local('HelveticaNeueBold'),
            url(/fonts/typography/HelveticaNeueBold.woff2) format('woff2');
        }
        @font-face {
          font-family: ObelixProBold;
          font-display: swap;
          font-style: normal;
          src: local('ObelixProBold'),
            url(/fonts/typography/ObelixProBold.woff2) format('woff2');
        }
        @font-face {
          font-family: ObelixProRegular;
          font-display: swap;
          font-style: normal;
          src: local('ObelixProRegular'),
            url(/fonts/typography/ObelixProRegular.woff2) format('woff2');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          letterSpacing: 0,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeMedium: {
          minWidth: "60px",
          padding: "1px 6px",
          textTransform: "none",
        },
        sizeLarge: {
          borderRadius: 0,
          fontFamily: "ObelixProBold",
          fontSize: 24,
          lineHeight: 1.4167,
          padding: "10px 32px",
        },
        containedSecondary: {
          color: common.white,
          "&:hover": {
            backgroundColor: "#EB6E1C",
          },
        },
        outlinedSecondary: {
          borderColor: "#EB6E1C",
        },
        startIcon: {
          marginLeft: 0,
          marginRight: "4px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: 55,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        dashed: {
          borderColor: "#E9E9E9",
          borderStyle: "dashed",
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#91D5FF",
          height: 4,
          paddingBottom: 4,
          paddingTop: 4,
        },
        thumb: {
          backgroundColor: common.white,
          border: "2px solid #91D5FF",
          height: 14,
          width: 14,
          "&:hover": {
            borderColor: "#0084FF",
          },
        },
        track: {
          height: 4,
        },

        valueLabel: {
          backgroundColor: "#595959",
          borderRadius: 4,
          fontSize: 14,
          lineHeight: 1.57,
          padding: "1px 8px",
          "&:before": {
            backgroundColor: "#595959",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          border: "1px solid #D9D9D9",
          borderRadius: "2px",
          margin: "1px",
        },
        inputRoot: {
          "&.MuiAutocomplete-inputRoot": {
            paddingBottom: "5px",
            paddingLeft: "12px",
          },
          "&.MuiInputBase-adornedStart": {
            paddingBottom: "4px",
            paddingLeft: "2px",
            paddingTop: "4px",
          },
          "& .MuiAutocomplete-input": {
            padding: 0,
          },
        },
        endAdornment: {
          right: "7px",
        },
      },
    },
  },
});

export default theme;
