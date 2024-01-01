import ScrollBanner from "../../molecules/ScrollBanner";

import Handshake from "../../../assets/images/slider/rodape.png";
import { ThemeProvider, Typography, createTheme } from "@mui/material";

const partnersSectionTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      fontWeight: "bold",
    },
  },
});

partnersSectionTheme.typography.h2 = {
  [partnersSectionTheme.breakpoints.up("xs")]: {
    color: "white",
    fontSize: 24,
    lineHeight: 1.2,
  },
  [partnersSectionTheme.breakpoints.up("sm")]: {
    color: "white",
    fontSize: 36,
  },
  [partnersSectionTheme.breakpoints.up("md")]: {
    color: "white",
    fontSize: 48,
  },
};

export default function PartnersSection() {
  return (
    <ScrollBanner banner={Handshake}>
      <ThemeProvider theme={partnersSectionTheme}>
        <Typography variant="h2">
          Temos uma rede de parceiros sólidos, cultivando transparência nas
          negociações com excelentes negócios para os compradores e produtores.
        </Typography>
      </ThemeProvider>
    </ScrollBanner>
  );
}
