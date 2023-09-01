import "./App.css";
import { useState } from "react";
import CardGrid from "./components/card-grid";

function App() {
  const gameLevels = [
    { level: 1, cards: 4 },
    { level: 2, cards: 6 },
    { level: 3, cards: 8 },
    { level: 4, cards: 10 },
    { level: 5, cards: 12 },
  ];

  const [currentLevel, setCurrentLevel] = useState(2);

  const numCardsDisplay = () => {
    return gameLevels[currentLevel - 1].cards;
  };

  return <CardGrid numOfCards={numCardsDisplay()} />;
}

export default App;
