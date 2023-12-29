import React, { MutableRefObject, useRef } from "react";
import { IPropsSections } from "../../organisms/Header";

import "./Header-Mobile.css";
import Hamburguer from "../../atoms/Hamburguer";

const MobileSection: React.FC<IPropsSections> = ({
  options,
  discriminator,
}) => {
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
    return options.map((link) => {
      return (
        <li key={`${link.label} ${discriminator}`} onClick={handleOptionClick}>
          <a href={link.href}>
            {link.label}
          </a>
        </li>
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
