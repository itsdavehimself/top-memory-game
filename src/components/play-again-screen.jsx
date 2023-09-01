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
    <div className="modal">
      <div className="play-again-btn">
        <div>Game over</div>
        <div>Your score: {lastScore}</div>
        <button onClick={handlePlayAgainClick}>Play Again?</button>
      </div>
    </div>
  );
}
