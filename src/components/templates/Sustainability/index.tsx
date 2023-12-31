import ContentSection from "../../organisms/ContentSection";

import PreparoIcon from "../../../assets/images/icons/preparo.png";
import AuditoriaIcon from "../../../assets/images/icons/auditoria.png";
import Desenvolvimento1Icon from "../../../assets/images/icons/desenvolvimento.png";
import Desenvolvimento2Icon from "../../../assets/images/icons/desenvolvimento2.png";
import CumprimentoIcon from "../../../assets/images/icons/cumprimento.png";
import ContabilidadeIcon from "../../../assets/images/icons/contabilidade.png";
import TreinamentoIcon from "../../../assets/images/icons/treinamentos.png";

import { IContent } from "../../../interfaces/Content";

export default function Sustainability() {
  const sectionColor = "var(--green)";
  const contentColor = "var(--darkblue)";
  const content: IContent[] = [
    {
      icon: PreparoIcon,
      color: contentColor,
      title: "Preparo de fazendas e empresas para protocolos de certificações",
      description:
        "desde a organização e gestão documental / estrutural / agronômica / ambiental / rastreável / trabalhista, junto à equipe, até execução do processo e auditoria oficial.",
      inline: true,
    },
    {
      icon: AuditoriaIcon,
      color: contentColor,
      title: "Auditoria dos protocolos",
      description: "para certificações.",
      inline: true,
    },
    {
      icon: Desenvolvimento1Icon,
      color: contentColor,
      title: "Desenvolvimento e acompanhamento",
      description: "de projetos sociais e ambientais.",
      inline: true,
    },
    {
      icon: Desenvolvimento2Icon,
      color: contentColor,
      title:
        "Desenvolvimento de gestão da qualidade, gestão ambiental e responsabilidade social,",
      description: "de acordo com as ISOs: 9001, 14001, SA 8000, entre outras.",
      inline: true,
    },
    {
      icon: CumprimentoIcon,
      color: contentColor,
      title: "Cumprimento das leis",
      description: "trabalhistas e ambientais.",
      inline: true,
    },
    {
      icon: ContabilidadeIcon,
      color: contentColor,
      title: "Contabilidade rural",
      description: "feita por especialistas.",
      inline: true,
    },
    {
      icon: TreinamentoIcon,
      color: contentColor,
      title: "Treinamentos e cursos",
      description:
        "nas áreas de protocolos de sustentabilidade e nas outras áreas de qualidade, que agregam valor aos produtos dos nossos clientes.",
      inline: true,
    },
  ];

  return (
    <ContentSection
    id="sustentabilidade"
      title="Sustentabilidade"
      subtitle="O que fazemos:"
      color={sectionColor}
      content={content}
    />
  );
}
