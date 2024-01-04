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
    lineHeight: 1.2,
  },
  [textBoxTheme.breakpoints.up("sm")]: {
    color: "white",
    fontSize: 36,
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 48,
  },
};

textBoxTheme.typography.h5 = {
  [textBoxTheme.breakpoints.up("xs")]: {
    color: "var(--darkblue)",
    fontWeight: 400,
    fontSize: 20,
  },
  [textBoxTheme.breakpoints.up("sm")]: {
    color: "white",
    fontSize: 18,
  },
  [textBoxTheme.breakpoints.up("md")]: {
    fontSize: 24,
  },
};

export default function SliderTextBox({ mobile }: { mobile?: boolean }) {
  return (
    <ThemeProvider theme={textBoxTheme}>
      <Box
        sx={{
          display: {
            xs: mobile ? "flex" : "none",
            sm: mobile ? "none" : "flex",
          },
          flexDirection: "column",
          position: { xs: "static", sm: "absolute" },
          left: { xs: "none", sm: 0 },
          alignSelf: "center",
          marginTop: { xs: "12vh", sm: 0 },
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "center", sm: "flex-start" },
          background: { xs: "var(--green)", sm: "transparent" },
          height: { xs: "25vh", sm: "auto" },
          paddingLeft: { xs: 0, sm: "8vw" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: { xs: "center", sm: "start" } }}
        >
          Inovações e <br />
          Parcerias
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: { xs: "center", sm: "start" } }}
        >
          para um Futuro de <br /> Negócios Sustentáveis!
        </Typography>
        <SliderButton
          icon={WhatsAppIcon}
          href="https://api.whatsapp.com/send?phone=5535999011125&text=Ol%C3%A1!"
        >
          Fale Conosco
        </SliderButton>
      </Box>
    </ThemeProvider>
  );
}
