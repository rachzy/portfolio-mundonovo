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
    color: "white",
    textShadow: "1px 0 black",
    lineHeight: 1.2,
  },
  [textBoxTheme.breakpoints.up("sm")]: {
    fontSize: 36,
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 48,
  },
};

textBoxTheme.typography.h5 = {
  [textBoxTheme.breakpoints.up("xs")]: {
    color: "white",
    textShadow: "1px 0 black",
  },
  [textBoxTheme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 24,
  },
};

export default function SliderTextBox() {
  return (
    <ThemeProvider theme={textBoxTheme}>
      <Box
        sx={{ display: "flex", left: { xs: "none", sm: 0 }, alignSelf: "center" }}
        className={classes.textBox}
      >
        <Typography variant="h2">
          Inovações e <br />
          Parcerias
        </Typography>
        <Typography variant="h5">
          para um Futuro de <br /> Negócios Sustentáveis!
        </Typography>
        <SliderButton
          icon={WhatsAppIcon}
          href="https://api.whatsapp.com/send?phone=553438313667&text=Ol%C3%A1!"
        >
          Fale Conosco
        </SliderButton>
      </Box>
    </ThemeProvider>
  );
}
