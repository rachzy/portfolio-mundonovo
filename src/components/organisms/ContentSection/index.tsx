import ContainerWrapper from "../../atoms/ContainerWrapper";
import SectionContainer from "../../atoms/SectionContainer";
import Title from "../../atoms/Title";

import ContentMap from "../../molecules/ContentMap";
import { IContentSection } from "../../../interfaces/ContentSection";

export default function ContentSection({title, subtitle, color, content}: IContentSection) {
  return (
    <ContainerWrapper title={title} color={color}>
      <SectionContainer>
        <Title color="white">{subtitle}</Title>
        <ContentMap content={content} />
      </SectionContainer>
    </ContainerWrapper>
  );
}
