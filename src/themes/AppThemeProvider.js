import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";

// we created createTheme function and passed it through theme. in order to pass it to all components we wrapped it with themeprovider.

// in typography, we will apply these specifications to all variants.
// for the main colors, we prepared a palette.
// we prepared default typography settings.
// for the stack we also made default settings.
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: "subtitle2",
        textTransform: "capitalize",
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: "row",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        p: 0,
        disableRipple: true,
      },
      variant: "text",
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
