import classes from "./SliderTextBox.module.css";

import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import SliderButton from "../SliderButton";

import WhatsAppIcon from "../../../assets/images/icons/whatsapp.png";

const textBoxTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color: "white",
    },
    h2: {
      fontWeight: "bold",
    },
  },
});

textBoxTheme.typography.h2 = {
  [textBoxTheme.breakpoints.up("xs")]: {
    fontSize: 28,
    color: "var(--darkblue)",
  },
  [textBoxTheme.breakpoints.up("sm")]: {
    fontSize: 36,
    color: "white",
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 48,
  },
};

textBoxTheme.typography.h5 = {
  [textBoxTheme.breakpoints.up("sm")]: {
    fontSize: 18,
    color: "white",
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 24,
  },
};

export default function SliderTextBox() {
  return (
    <ThemeProvider theme={textBoxTheme}>
      <Box
        sx={{ display: { xs: "none", sm: "flex" } }}
        className={classes.textBox}
      >
        <Typography variant="h2">
          Inovações e <br />
          Parcerias
        </Typography>
        <Typography variant="h5">
          para um Futuro de <br /> Negócios Sustentáveis!
        </Typography>
        <SliderButton icon={WhatsAppIcon}>Fale Conosco</SliderButton>
      </Box>
    </ThemeProvider>
  );
}
