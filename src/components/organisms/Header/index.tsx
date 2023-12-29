import Logo from "../../../assets/images/outros/logo-cabecalho.png";

import DefaultSection from "../../molecules/Header/HeaderDesktop";
import MobileSection from "../../molecules/Header/HeaderMobile";

interface IOptions {
  label: string;
  href?: string;
}
[];

export interface IPropsSections {
  options: IOptions[];
  discriminator: string;
}

const Header = () => {
  const options: IOptions[] = [
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

  function handleLogoClick() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <header>
        <div className={`header-mobile-logo`}>
          <img onClick={handleLogoClick} src={Logo} alt="logo agrocafe" />
        </div>
        <DefaultSection options={options} discriminator={"default"} />
        <MobileSection
          options={options}
          discriminator={"mobile"}
        />
      </header>
    </>
  );
};

export default Header;
