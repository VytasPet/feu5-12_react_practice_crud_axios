import './card.css';

// perdaryti kad div butu styled componentas

function Card({ children }) {
  return <div className="card">{children}</div>;
}

// prop types buti vienas elementas arba masyvas elementu

export default Card;
