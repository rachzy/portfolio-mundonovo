import Logo from "../../../assets/images/outros/logo-cabecalho.png";
import { IMenuOption } from "../../../interfaces/MenuOption";

import DefaultSection from "../../molecules/HeaderDesktop";
import MobileSection from "../../molecules/HeaderMobile";

const HeaderComponent = ({ options }: { options: IMenuOption[] }) => {
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
        <MobileSection options={options} discriminator={"mobile"} />
      </header>
    </>
  );
};

export default HeaderComponent;
