import "./App.css";
import { useState } from "react";
import CardGrid from "./components/card-grid";
import Score from "./components/scores";
import PlayAgainScreen from "./components/play-again-screen";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);

  const [lastScore, setLastScore] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameLevels = [
    { level: 1, cards: 4 },
    { level: 2, cards: 6 },
    { level: 3, cards: 8 },
    { level: 4, cards: 10 },
    { level: 5, cards: 12 },
    { level: 6, cards: 14 },
    { level: 7, cards: 16 },
    { level: 8, cards: 18 },
    { level: 9, cards: 20 },
    { level: 10, cards: 22 },
  ];

  const [currentLevel, setCurrentLevel] = useState(1);

  const numCardsDisplay = () => {
    return gameLevels[currentLevel - 1].cards;
  };

  return (
    <div className="app">
      <Score score={score} highScore={highScore} />
      {isGameOver ? (
        <PlayAgainScreen
          setIsGameOver={setIsGameOver}
          setCurrentLevel={setCurrentLevel}
          lastScore={lastScore}
        />
      ) : (
        <CardGrid
          numOfCards={numCardsDisplay()}
          setIsGameOver={setIsGameOver}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          setLastScore={setLastScore}
        />
      )}
    </div>
  );
}

export default App;
