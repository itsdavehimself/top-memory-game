import "./App.css";
import { useState } from "react";
import CardGrid from "./components/card-grid";
import Score from "./components/scores";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameLevels = [
    { level: 1, cards: 4 },
    { level: 2, cards: 6 },
    { level: 3, cards: 8 },
    { level: 4, cards: 10 },
    { level: 5, cards: 12 },
  ];

  const [currentLevel, setCurrentLevel] = useState(1);

  const numCardsDisplay = () => {
    return gameLevels[currentLevel - 1].cards;
  };

  return (
    <>
      <Score score={score} highScore={highScore} />
      {!isGameOver && (
        <CardGrid
          numOfCards={numCardsDisplay()}
          setIsGameOver={setIsGameOver}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      )}
    </>
  );
}

export default App;
