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
      title: "Região da Canastra",
      description: [
        "Avenida Padre Murilo de Almeida Conceição, 249",
        "Loja 1 • Centro • São Roque de Minas/MG",
        "CEP 37928-000",
      ],
    },
    {
      title: "Região do Cerrado Mineiro",
      description: [
        "Endereço aqui neste local",
        "Bairro • Cidade/MG",
        "CEP 000000-000",
      ],
    },
    {
      title: "Região da Alto Mogiana",
      description: [
        "Endereço aqui neste local",
        "Bairro • Cidade/MG",
        "CEP 000000-000",
      ],
    },
    {
      title: "Região do Sudoeste de Minas",
      description: [
        "Endereço aqui neste local",
        "Bairro • Cidade/MG",
        "CEP 000000-000",
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
      href: "https://api.whatsapp.com/send?phone=553438313667&text=Ol%C3%A1!",
    },
    {
      icon: EmailIcon,
      href: "mundonovo@mundonovocafe.com.br",
    },
  ];

  return <FooterComponent addresses={addresses} contacts={contacts} />;
}
