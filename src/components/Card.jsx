import "../styles/Card.css";

export default function Card({ card, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(card.id)}>
      <img src={card.image} alt="card.name" />
      <p className="card-name">{card.name}</p>
    </div>
  );
}
