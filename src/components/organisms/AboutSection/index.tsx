import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import SectionImage from "../../../assets/images/outros/grafismos-impulsionamos.png";
import SectionContainer from "../../atoms/SectionContainer";
import Title from "../../atoms/Title";
import { IPerson } from "../../../interfaces/Person";

const aboutTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    body1: {
      color: "var(--darkblue)",
      fontSize: 20,
      lineHeight: 1.2,
    },
  },
});

import Nelia from "../../../assets/images/time/nelia.png";
import Tamara from "../../../assets/images/time/tamara.png";
import Winicius from "../../../assets/images/time/winicius.png";
import BlueBox from "../../atoms/BlueBox";
import TeamMembers from "../../molecules/TeamMembers";
import Number from "../../atoms/Number";

import FazendasIcon from "../../../assets/images/icons/fazendas-certificadas.png";
import CursosIcon from "../../../assets/images/icons/cursos-realizados.png";
import NegociosIcon from "../../../assets/images/icons/negocios-concretizados.png";

export default function AboutSection() {
  const team: IPerson[] = [
    {
      name: "Nélia Maria de Faria",
      image: Nelia,
      jobTitle: "Sócia-proprietária, Diretora de Projetos.",
      description:
        "Desde a infância, é apaixonada pelo campo e a administração rural. Filha de cafeicultor, aos 21 anos, formou em Bacharel em Ciências Contábeis com o intuito de auxiliar na gestão da fazenda de seus pais e de alguns clientes da área rural, onde já se via a necessidade de um aprimoramento na Gestão Socioambiental. Logo, buscou entender mais sobre a cafeicultura, cursando Técnico em Cafeicultura e aprimorando com especializações em Sistemas de Gestão, formando em: Auditora Líder em Gestão de Qualidade, Gestão Ambiental, Auditora Interna de  Responsabilidade Social e Diretrizes para Auditoria em Sistemas de Gestão. No final de 2020, começou a trabalhar como Auditora Líder da norma Rainforest Alliance. Em 2023, Nélia se integrou na sociedade da Mundo Novo Café, onde coloca sua experiência para o campo, buscando novos desafios e continuando sua missão de apoio e desenvolvimento na Gestão Rural.",
    },
    {
      name: "Tâmara Isa da Silva",
      image: Tamara,
      jobTitle:
        "Sócia-proprietária, Diretora de Desenvolvimento de Estratégia de Mercado e Sustentabilidade.",
      description:
        "Graduada em Tecnologia em Cafeicultura, é apaixonada pelo Agronegócio Café e, em especial, por pessoas e o segmento de Sustentabilidade. É fundadora da Mundo Novo Café. Possui mais de 11 anos de vivência no universo da cafeicultura, atuando em multinacionais, no setor de assessoria de protocolos de certificações, na organização de grupos, em auditorias internas, em treinamentos e em inspeções técnicas e afins. Atuou, também, em áreas de relacionamentos e projetos. Está, no momento, se especializando em MBA - Gestão de Projetos ESALQ/USP. ",
    },
    {
      name: "WINICIUS BAQUIÃO DUTRA",
      image: Winicius,
      jobTitle:
        "Sócio-proprietário, Diretor Comercial e Gestão de Processos e Qualidade.",
      description:
        "Graduado em Agronomia, é Agricultor e Produtor Rural, sendo a 5ª geração da cafeicultura da família. Sempre morou na fazenda, auxiliando seu pai nas atividades e na gestão, contribuindo em importantes tomadas de decisões. Winicius, também, é Técnico em Administração, Provador e Classificador de Cafés. Assim como os outros sócios, também, é apaixonado por café e direciona, na Mundo Novo, a parte de negociações, sendo, também, um dos fundadores da empresa.",
    },
  ];

  return (
    <ThemeProvider theme={aboutTheme}>
      <SectionContainer sx={{ overflow: "visible" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Title>Impulsionando atitudes</Title>
            <Typography variant="body1" sx={{ marginTop: { xs: 4, sm: 1 } }}>
              em busca das <b>melhores oportunidades</b> para gerar valor aos
              produtos dos nossos clientes, oferecendo{" "}
              <b>conhecimento, suporte</b> e <b>novas ferramentas</b> para uma{" "}
              <b>cafeicultura progressista</b> e <b>sustentável.</b>
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "80%" } }}>
              <img
                style={{ width: "100%" }}
                src={SectionImage}
                alt="grafismos impulsionamos"
              />
            </Box>
          </Box>
        </Box>
        <TeamMembers team={team} />
      </SectionContainer>
      <BlueBox>
        <Grid item xs={12} sm={6} md={3}>
          <Title color={"white"}>Conheça alguns dos nossos números:</Title>
        </Grid>
        <Number
          icon={FazendasIcon}
          value={40}
          label={"Fazendas certificadas"}
        />
        <Number
          icon={CursosIcon}
          value={55}
          label={"Cursos realizados"}
        />
        <Number
          icon={NegociosIcon}
          value={300}
          label={"Negócios concretizados"}
        />
      </BlueBox>
    </ThemeProvider>
  );
}
