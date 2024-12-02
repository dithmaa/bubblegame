import React from "react";
import styles from "./EnergyBar.module.scss";
export const EnergyBar = ({ percent }) => {
  return (
    <div className={"energy-bar"}>
      <span style={{ width: percent + "%" }}></span>
    </div>
  );
};
