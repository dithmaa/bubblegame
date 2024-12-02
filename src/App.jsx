import { useState } from "react";
import { GamePage } from "./pages";

function App() {
  //Очки | Клики

  const [currentScore, setScore] = useState(0);
  const [clickPerOne, setClickPerOne] = useState(1);

  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <GamePage
        clickPerOne={clickPerOne}
        currentScore={currentScore}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
