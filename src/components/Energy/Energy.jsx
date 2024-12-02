import React, { useEffect } from "react";
import styles from "./Energy.module.scss";
import { EnergyBar } from "../";
export const Energy = ({
  setPercent,
  percent,
  energyWait,
  energyStaminaFunc,
}) => {
  useEffect(() => {
    if (percent < 100 && !energyWait) {
      energyStaminaFunc();
    }
  }, [energyWait]);
  return <EnergyBar setPercent={setPercent} percent={percent} />;
};
