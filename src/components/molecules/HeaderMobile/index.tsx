import React, { MutableRefObject, useRef } from "react";

import "./Header-Mobile.css";
import Hamburguer from "../../atoms/Hamburguer";
import { IMenuOption } from "../../../interfaces/MenuOption";

import IconDot from "../../../assets/images/outros/icone-menu.png";
import { Box } from "@mui/material";

interface IProps {
  options: IMenuOption[];
  discriminator: string;
}

const MobileSection: React.FC<IProps> = ({ options, discriminator }) => {
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>;

  function handleHamburguerClick() {
    const hamburguerMobile = document.querySelector(
      "#hamburguer-menu-mobile"
    ) as HTMLButtonElement;
    hamburguerMobile.classList.toggle("is-active");
    displayMenu();
  }

  function displayMenu() {
    menuRef.current.classList.toggle("active");
  }

  function handleOptionClick() {
    const hamburguerMobile = document.querySelector(
      "#hamburguer-menu-mobile"
    ) as HTMLButtonElement;
    hamburguerMobile.click();
    window.scrollTo(0, 0);
  }

  function renderOptions() {
    return options.map((link, index) => {
      return (
        <React.Fragment key={`${link.label} ${discriminator}`}>
          {index !== 0 && (
            <Box sx={{ width: 48, margin: "auto" }}>
              <img
                style={{ width: "100%", opacity: "100%" }}
                src={IconDot}
                alt=""
              />
            </Box>
          )}
          <li onClick={handleOptionClick}>
            <a href={index === 0 ? "#slider" : link.href}>{link.label}</a>
          </li>
        </React.Fragment>
      );
    });
  }

  function handleMobileBarClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (!e.target.toString().includes("DivElement")) return;
    window.scrollTo(0, 0);
  }

  return (
    <div className="mobile" onClick={handleMobileBarClick}>
      <div className={`hamburguer-box`} onClick={handleHamburguerClick}>
        <Hamburguer id={"hamburguer-menu-mobile"} />
      </div>
      <div className="mobile-background" ref={menuRef}>
        <div className="mobile-menu">
          <nav className="options">{renderOptions()}</nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
