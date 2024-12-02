import React from "react";
import styles from "./Menu.module.scss";

import presentIcon from "../../assets/img/present.png";
import marketIcon from "../../assets/img/market_icon.png";

export const Menu = () => {
  return (
    <nav className="menu">
      <button className="menu__item">
        <img src={presentIcon} alt="Present Icon" />
        <span>Задания</span>
      </button>
      <button className="menu__item">
        <img src={marketIcon} alt="Market Icon" />
        <span>Бусты</span>
      </button>
    </nav>
  );
};
