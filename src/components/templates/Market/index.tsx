import ContentSection from "../../organisms/ContentSection";

import ClassIcon from "../../../assets/images/icons/classificacao.png";
import AnaliseIcon from "../../../assets/images/icons/analise-sensorial.png";
import ComercializacaoIcon from "../../../assets/images/icons/comercializacao.png";
import MarketIcon from "../../../assets/images/icons/mercado-futuro.png";

import { IContent } from "../../../interfaces/Content";

export default function Market() {
  const color = "var(--rosewood)";
  const content: IContent[] = [
    {
      icon: ClassIcon,
      color: color,
      title: "Classificação:",
      description: "cuidado personalizado, de grão a grão!",
    },
    {
      icon: AnaliseIcon,
      color: color,
      title: "Análise sensorial:",
      description:
        "direcionamento com precisão da amostra, feita por especialistas, baseada nas metodologias COB/SCA.",
    },
    {
      icon: ComercializacaoIcon,
      color: color,
      title: "Comercialização:",
      description: "parceiros sólidos e transparência em todas as etapas.",
    },
    {
      icon: MarketIcon,
      color: color,
      title: "Mercado futuro:",
      description:
        "consultoria e negociações futuras em todos os padrões de cafés (bica corrida, finos, especiais, preparados, entre outros).",
    },
  ];

  return (
    <ContentSection
      title="Mercado"
      subtitle="O que fazemos:"
      color={color}
      content={content}
    />
  );
}
