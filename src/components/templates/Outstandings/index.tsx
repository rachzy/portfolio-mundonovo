import ContentSection from "../../organisms/ContentSection";

import OneHundredIcon from "../../../assets/images/icons/cemporcento.png";
import SemeamosIcon from "../../../assets/images/icons/semeamos.png";
import RedeIcon from "../../../assets/images/icons/rede.png";
import GerenciamosIcon from "../../../assets/images/icons/gerenciamos.png";
import AssistenciaIcon from "../../../assets/images/icons/assistencia.png";
import EscritorioIcon from "../../../assets/images/icons/escritorio.png";
import GestaoIcon from "../../../assets/images/icons/gestao-profissional.png";
import ProfissionaisIcon from "../../../assets/images/icons/profissionais-conectados.png";
import EquipeIcon from "../../../assets/images/icons/equipe-especialistas.png";
import SaberIcon from "../../../assets/images/icons/saber-o-que-fazer.png";

import { IContent } from "../../../interfaces/Content";

export default function Outstandings() {
  const sectionColor = "var(--darkblue)";
  const contentColor = "var(--darkblue)";
  const content: IContent[] = [
    {
      icon: OneHundredIcon,
      color: contentColor,
      title: "Aprovação de 100%",
      description:
        "no relacionamento e no comprometimento com clientes e parceiros.",
      inline: true,
    },
    {
      icon: SemeamosIcon,
      color: contentColor,
      title: "agilidade nos processos e nos atendimentos.",
      description: "Semeamos, com muito orgulho, em nosso DNA,",
      inline: true,
      inverse: true,
    },
    {
      icon: RedeIcon,
      color: contentColor,
      title: "Rede de parceiros sólidos",
      description: "cultivando transparência nas negociações com excelentes negócios para os compradores e produtores.",
      inline: true,
    },
    {
      icon: GerenciamosIcon,
      color: contentColor,
      title:
        "Gerenciamos um grupo de produtores,",
      description: "buscando a otimização de custos durante as certificações Rainforest/Aliance.",
      inline: true,
    },
    {
      icon: AssistenciaIcon,
      color: contentColor,
      title: "Nossa assistência é personalizada para uma certificação inclusiva e descomplicada,",
      description: "acessível desde o pequeno ao grande produtor.",
      inline: true,
    },
    {
      icon: EscritorioIcon,
      color: contentColor,
      title: "Escritório fixo nas principais regiões de café:",
      description: "Canastra/Alto Mogiana/Sudoeste de Minas/Cerrado Mineiro.",
      inline: false,
    },
    {
      icon: GestaoIcon,
      color: contentColor,
      title: "Gestão profissional",
      description:
        "para com pessoas e meio ambiente.",
      inline: true,
    },
    {
      icon: ProfissionaisIcon,
      color: contentColor,
      title: "Profissionais conectados e atualizados com o mercado,",
      description:
        "que entendem a realidade dos produtores, transformando problemas em oportunidades e soluções.",
      inline: true,
    },
    {
      icon: EquipeIcon,
      color: contentColor,
      title: "Equipe composta por especialistas ",
      description:
        "em Cafeicultura Sustentável, Engenheiros Agrônomos, Agronegócio, Contador e Produtores Rurais.",
      inline: true,
    },
    {
      icon: SaberIcon,
      color: contentColor,
      title: "Saber o que fazer e como fazer ",
      description:
        "para agregar valor aos produtos dos nossos clientes.",
      inline: true,
    },
  ];

  return (
    <ContentSection
      title="Diferenciais"
      subtitle="O que nos tornam únicos:"
      color={sectionColor}
      content={content}
    />
  );
}
