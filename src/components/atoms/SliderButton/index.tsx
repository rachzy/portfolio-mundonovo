import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import classes from "./SliderButton.module.css";

interface IProps {
  children: React.ReactNode;
  icon: string;
  href?: string;
}

const buttonTheme = createTheme({
  typography: {
    h5: {
      fontFamily: "Poppins",
      fontWeight: "bold",
    },
  },
});

buttonTheme.typography.h5 = {
  [buttonTheme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
  [buttonTheme.breakpoints.up("md")]: {
    fontSize: 28,
  }
}

export default function SliderButton({ children, icon, href }: IProps) {
  function handleButtonClick() {
    window.open(href);
  }
  return (
      <ThemeProvider theme={buttonTheme}>
        <Box sx={{ width: "100%" }}>
          <Box
            className={classes.sliderButton}
            sx={{
              paddingLeft: {
                xs: "1rem",
                sm: "2rem",
              },
              background: { xs: "var(--darkblue)", sm: "white" },
              color: { xs: "white", sm: "var(--darkblue)" },
            }}
            onClick={handleButtonClick}
          >
            <Typography variant="h5">{children}</Typography>
            <img src={icon} alt="button icon" />
          </Box>
        </Box>
      </ThemeProvider>
  );
}
