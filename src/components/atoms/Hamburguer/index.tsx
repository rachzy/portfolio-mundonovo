import React, { MutableRefObject, useRef } from "react";

import "./Hamburguer.scss";

interface IProps {
  id?: string;
  onClick?: () => void;
}

const Hamburguer: React.FC<IProps> = ({ id, onClick }) => {
  const btn = useRef() as MutableRefObject<HTMLButtonElement>;

  function handleButtonClick() {
    if (!onClick) return;
    onClick();
    
    if (!btn || !btn.current) return;

    btn.current.classList.toggle("is-active");
  }

  return (
    <button
      id={id}
      className="c-hamburger c-hamburger--htx verde label"
      onClick={handleButtonClick}
      aria-label="Main Menu"
      ref={btn}
    >
      <span>toggle menu</span>
    </button>
  );
};

export default Hamburguer;
