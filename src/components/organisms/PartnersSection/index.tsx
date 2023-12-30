import ScrollBanner from "../../molecules/ScrollBanner";

import Handshake from "../../../assets/images/slider/rodape.png";
import Title from "../../atoms/Title";

export default function PartnersSection() {
  return (
    <ScrollBanner banner={Handshake}>
      <Title color={"white"}>
        Temos uma rede de parceiros sólidos, cultivando transparência nas
        negociações com excelentes negócios para os compradores e produtores.
      </Title>
    </ScrollBanner>
  );
}
