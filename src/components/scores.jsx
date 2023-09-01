export default function Score({ score, highScore }) {
  return (
    <div className="scores-container">
      <div className="current-score">Current Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
}
