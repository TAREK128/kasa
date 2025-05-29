import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.scss";

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/logement/${id}`);
  }

  return (
    <div className="card" onClick={handleClick} tabIndex={0} role="button" aria-pressed="false">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
