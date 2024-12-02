import React, { useCallback, useEffect, useState } from "react";

import { Energy, EnergyBar } from "../../components/";
import { MainScore } from "../../components/";
import { Popit } from "../../components/";
import { Menu } from "../../components";
import debounce from "lodash.debounce";

export const GamePage = ({ clickPerOne, currentScore, setScore }) => {
  // Энергия
  const [percent, setPercent] = useState(100);
  const [energyWait, setEnergyWait] = useState(true);

  const handlePercent = (value) => {
    setPercent(value);
  };
  const energyDebounce = useCallback(
    debounce(() => {
      setEnergyWait(false);
    }, 800),
    []
  );

  const energyStaminaFunc = () => {
    if (percent > 50.1) {
      setTimeout(() => {
        handlePercent(100);
      }, 3000);
    } else if (percent < 50.1) {
      setTimeout(() => {
        handlePercent(50);
        setTimeout(() => {
          handlePercent(100);
        }, 7000);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1 style={{ color: "#fff" }}>Страница игры</h1>
      <MainScore clickPerOne={clickPerOne} currentScore={currentScore} />
      <Popit
        setEnergyWait={setEnergyWait}
        setScore={setScore}
        energyDebounce={energyDebounce}
        setPercent={setPercent}
        percent={percent}
        handlePercent={handlePercent}
        clickPerOne={clickPerOne}
      />
      <Energy
        energyStaminaFunc={energyStaminaFunc}
        energyWait={energyWait}
        percent={percent}
      />

      <Menu />
    </div>
  );
};
