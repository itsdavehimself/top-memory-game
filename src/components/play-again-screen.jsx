import "/src/styles/play-again-screen.css";

export default function PlayAgainScreen({
  setIsGameOver,
  setCurrentLevel,
  lastScore,
}) {
  const handlePlayAgainClick = () => {
    setIsGameOver(false);
    setCurrentLevel(1);
  };

  return (
    <div className="play-again-screen">
      <div className="game-over">Game over</div>
      <div className="score-message">Your score: {lastScore}</div>
      <div className="play-again-btn">
        <button onClick={handlePlayAgainClick}>Play Again?</button>
      </div>
    </div>
  );
}
