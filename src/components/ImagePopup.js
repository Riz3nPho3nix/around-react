import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`display modal ${props.isOpen ? 'modal__open' : ''}`} onClick={props.close}>
        <div className="modal__window display__window">
          <button className="modal__close link" onClick={props.close}></button>
          <figure>
            <img className="display__image" src={`${props.card.link}`} />
            <figcaption className="display__caption">{props.card.name}</figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;