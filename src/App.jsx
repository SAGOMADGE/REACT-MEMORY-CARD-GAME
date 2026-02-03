import { useState, useEffect } from "react";
import { fetchCards } from "./Api.jsx";
import Card from "./components/Card.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import "./styles/App.css";
import "./styles/Cards.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // useEffect для fetch
  useEffect(() => {
    fetchCards().then((data) => setCards(data));
  }, []);

  // shuffle
  const shuffleCards = (array) => [...array].sort(() => Math.random() - 0.5);

  // handle click
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      // сброс очков
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) setBestScore(newScore);

      setClicked([...clicked, id]);
      setCards(shuffleCards(cards));
    }
  };

  return (
    <div className="app">
      <h1 className="Game-title">Amphibia Memory Game</h1>

      <p className="game-instruction-text">
        Get points by clicking on an image but dont't click on any any more than
        once!
      </p>

      <Scoreboard score={score} bestScore={bestScore} />

      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
