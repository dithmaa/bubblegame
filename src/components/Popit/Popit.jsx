import React, { useState } from "react";
import styles from "./Popit.module.scss";
import popitImg from "../../assets/img/popi.png";

export const Popit = ({
  percent,
  handlePercent,
  setEnergyWait,
  setScore,
  energyDebounce,
  clickPerOne,
  setPercent,
}) => {
  // Состояние пузыриков Попита
  const [bubbleStates, setBubbleStates] = useState(
    Array.from({ length: 6 }, () => Array(6).fill(false))
  );
  //Очки | Клики
  const [allowPopitClick, setAllowPopitClick] = useState(false); // Управляет вызовом handlePopitClick
  const handlePopitClick = (e) => {
    if (!allowPopitClick) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClicks([...clicks, { id: Date.now(), x, y }]);

    setAllowPopitClick(false);
  };

  const [clicks, setClicks] = useState([]); // циферки что вылетают на экране

  const handleAnimationEnd = (id) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const handleBubbleClick = (rowIndex, colIndex) => {
    if (percent > 0) {
      // Разрешаем вылета циферок
      setAllowPopitClick(true);
      // Состояние пузыриков true/false
      const newBubbleStates = [...bubbleStates];
      newBubbleStates[rowIndex][colIndex] =
        !newBubbleStates[rowIndex][colIndex];
      setBubbleStates(newBubbleStates);
      // Логика энергии
      let newPercent = percent;
      newPercent -= 3;
      handlePercent(newPercent); // Управление шкалой энергии
      setEnergyWait(true); // чтобы не регенерировалась энергия во время клика
      energyDebounce(); // после отжатия клика через секунду возобновлять регенерацию

      setScore((score) => {
        // обновление главного счетчика
        score = Number(clickPerOne) + Number(score);

        return score;
      });
    } else {
      // запрет на клик
      setPercent(0);
      setAllowPopitClick(false);
    }
  };

  return (
    <div
      className="popit"
      style={{
        backgroundImage: `url(${popitImg})`,
      }}
    >
      {/* Сетка попита */}
      <div className="grid" onClick={handlePopitClick}>
        {bubbleStates.map((row, rowIndex) => (
          <div key={rowIndex} className="popit-row">
            {row.map((active, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${active ? "active" : ""}`}
                onClick={(event) => handleBubbleClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0"
          style={{
            top: `${click.y - 20}px`,
            left: `${click.x + 30}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          12
        </div>
      ))}
      {/* Вылетающие числа */}
    </div>
  );
};
