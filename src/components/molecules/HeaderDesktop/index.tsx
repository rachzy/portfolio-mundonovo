import "./Header-Desktop.css";

import UnderlineIcon from "../../../assets/images/outros/icone-menu.png";
import Logo from "../../../assets/images/outros/logo-cabecalho.png";

import { Container } from "@mui/material";
import { IMenuOption } from "../../../interfaces/MenuOption";

interface IProps {
  options: IMenuOption[];
  discriminator: string;
}

const DefaultSection: React.FC<IProps> = ({
  options,
  discriminator,
}) => {
  function handleLogoClick() {
    window.scrollTo(0, 0);
  }

  function renderOptions() {
    return options.map((link) => {
      return (
        <li key={`${link.label} ${discriminator}`}>
          <a className="menu-option" href={link.href}>
            {link.label}
          </a>
          <img src={UnderlineIcon} />
        </li>
      );
    });
  }

  return (
    <div className="default">
      <div className="menu">
        <Container>
          <div className="menu-content">
            <div className="wrapper-logo">
              <img onClick={handleLogoClick} src={Logo} alt="logo agrocafe" />
            </div>
            <div className="wrapper-menu">
              <nav>
                <ul className="options">{renderOptions()}</ul>
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DefaultSection;
