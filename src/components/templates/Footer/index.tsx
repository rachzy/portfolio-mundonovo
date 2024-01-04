import { IAddress } from "../../../interfaces/Address";
import { IContact } from "../../../interfaces/Contact";
import FooterComponent from "../../organisms/FooterComponent";

import InstagramIcon from "../../../assets/images/icons/instagram.png";
import FacebookIcon from "../../../assets/images/icons/facebook.png";
import WhatsappIcon from "../../../assets/images/icons/whatsapp.png";
import EmailIcon from "../../../assets/images/icons/e-mail.png";

export default function Footer() {
  const addresses: IAddress[] = [
    {
      title: "Serra da Canastra:",
      description: [
        "Avenida Padre Murilo de Almeida Conceição, 249 - Loja 1",
        "Centro - São Roque de Minas/MG ",
        "CEP 37928-000",
        "37 9 9964-7717"
      ],
    },
    {
      title: "Cerrado Mineiro",
      description: [
        "Patrocínio, MG",
        "34 9 9948-5118"
      ],
    },
    {
      title: "Sudoeste de Minas I Alta Mogiana:",
      description: [
        "Avenida Oliveira Rezende, 1097 ",
        "Vila Operária - São Sebastião do Paraíso/MG",
        "CEP 37.950-282",
        "35 9 9901-1125"
      ],
    },
  ];

  const contacts: IContact[] = [
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/mundonovogncafe/",
    },
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com/mundonovogncafe/",
    },
    {
      icon: WhatsappIcon,
      href: "https://api.whatsapp.com/send?phone=5535999011125&text=Ol%C3%A1!",
    },
    {
      icon: EmailIcon,
      href: "mailto:qualidade@mundonovocafe.com.br",
    },
  ];

  return <FooterComponent addresses={addresses} contacts={contacts} />;
}
