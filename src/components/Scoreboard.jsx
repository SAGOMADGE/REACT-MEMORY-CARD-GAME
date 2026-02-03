export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p className="score">Score: {score}</p>
      <p className="best-score">Best Score: {bestScore}</p>
    </div>
  );
}
