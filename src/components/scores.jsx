import "/src/styles/scores.css";

export default function Score({ score, highScore }) {
  return (
    <div className="scores">
      <div className="current-score">Current Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
}
