import React from "react";
import boostImg1 from "../../assets/img/icon-boost-1.png";

import styles from "./MainScore.module.scss";
export const MainScore = ({ clickPerOne, currentScore }) => {
  return (
    <div className="res" style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: "13px", fontWeight: 100 }}>
        Сила клика: {clickPerOne}
      </span>
      <div
        className="res-score"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img className="buba-score-icon" src={boostImg1} alt="Buba Icon" />
        {currentScore}
      </div>
    </div>
  );
};
