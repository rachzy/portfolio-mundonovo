import { IMenuOption } from "../../../interfaces/MenuOption";
import HeaderComponent from "../../organisms/HeaderComponent";

export default function Header() {
  const options: IMenuOption[] = [
    {
      label: "Sobre Nós",
      href: "#sobre",
    },
    {
      label: "Mercado",
      href: "#mercado",
    },
    {
      label: "Sustentabilidade",
      href: "#sustentabilidade",
    },
    {
      label: "Diferenciais",
      href: "#diferenciais",
    },
    {
      label: "Contato",
      href: "#contato",
    },
  ];

  return <HeaderComponent options={options} />;
}
