import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__image" style={{backgroundImage: `url(${props.card.link})` }} onClick={handleClick}>
        <button className="card__delete-btn"></button>
      </div>
      <div className="card__label">
        <h2 className="card__heading">{props.card.name}</h2>
        <div className="card__likes">
          <button className="card__heart"></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;