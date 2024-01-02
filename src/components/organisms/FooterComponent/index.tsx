import FooterCima from "../../../assets/images/icons/subir.png";
import LogoPortfolio from "../../../assets/images/outros/assinatura-portfolio.png";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Title from "../../atoms/Title";
import { IAddress } from "../../../interfaces/Address";
import AddressLabel from "../../atoms/AddressLabel";
import Line from "../../atoms/Line";
import FooterIcon from "../../atoms/FooterIcon";
import ContactMap from "../../molecules/ContactMap";
import { IContact } from "../../../interfaces/Contact";

import MundoNovoLogo from "../../../assets/images/outros/logo-rodape.png";

interface IProps {
  addresses: IAddress[];
  contacts: IContact[];
}

const footerTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    h6: {
      color: "var(--darkblue)",
      fontWeight: 500,
      fontSize: 12,
    },
  },
});

const FooterComponent = ({ addresses, contacts }: IProps) => {
  function renderAddressLabels(): JSX.Element[] {
    return addresses.map((address) => (
      <AddressLabel key={address.title} {...address} />
    ));
  }

  function handleScrollUpButtonClick() {
    window.scrollTo(0, 0);
  }

  return (
    <footer id="contato" style={{ background: "transparent" }}>
      <ThemeProvider theme={footerTheme}>
        <Container>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <FooterIcon src={FooterCima} onClick={handleScrollUpButtonClick} />
          </Box>
          <Box marginTop={8}>
            <Box sx={{ marginY: 6 }}>
              <Title>Contato:</Title>
            </Box>
            <Grid container spacing={6}>
              {renderAddressLabels()}
            </Grid>
            <Line />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box sx={{ flex: 2, width: "100%" }}>
                <ContactMap contacts={contacts} />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-end" },
                  marginTop: { xs: 15, sm: 0 },
                  width: "100%",
                }}
              >
                <Box sx={{ width: 200 }}>
                  <img
                    style={{ width: "100%" }}
                    src={MundoNovoLogo}
                    alt="mundo novo logo"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            width: "100%",
            background: "white",
            textAlign: "center",
            paddingY: 2,
            marginTop: 10,
          }}
        >
          <Typography
            variant={"h6"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              columnGap: 1,
              rowGap: 1,
            }}
          >
            © 2024 Mundo Novo Café • Mercado e Sustentabilidade - Desenvolvido
            por:{" "}
            <a href="https://agenciaportfolio.com.br/" target="_blank">
              <img style={{ width: 55 }} src={LogoPortfolio} />
            </a>
          </Typography>
        </Box>
      </ThemeProvider>
    </footer>
  );
};

export default FooterComponent;
