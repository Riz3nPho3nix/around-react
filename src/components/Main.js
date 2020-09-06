import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
    .then ((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch( err => console.log(err));
  });

  api.getInitialCards()
  .then (cards => {setCards(cards)})
  .catch( err => console.log(err));

  return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar">
              <img alt="Profile portrait" className="profile__picture" src={`${userAvatar}`}/>
              <button className="profile__overlay" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__job">{userDescription}</p>
              <button className="profile__edit link" aria-label="Edit Profile" onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add-btn link" onClick={props.onAddPlace}></button>
        </section>
        <ul className="cards">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={() => {props.onCardClick(card)}} />
          })}
        </ul>
      <PopupWithForm name='profile-edit' title='Edit Profile' isOpen={props.isEditProfileOpen} onClose={props.onClose}>
        <input className='modal__input' name='name' type="text" placeholder="Name" minLength="2" maxLength="40" required />
        <input className='modal__input' name='about' type="text" placeholder="Job Title" minLength="2" maxLength="200" required />
      </PopupWithForm>

      <PopupWithForm name='new-card' title='New Place' isOpen={props.isAddPlaceOpen} onClose={props.onClose}>
        <input className='modal__input' name='name' type="text" placeholder="Title" minLength="1" maxLength="30" required />
        <input className='modal__input' name='link' type="url" placeholder="Image link" required />
      </PopupWithForm>

      <PopupWithForm name='new-avatar' title='Change Profile Picture' isOpen={props.isEditAvatarOpen} onClose={props.onClose}>
        <input className='modal__input' name='avatar' type="url" placeholder="Image link" required />
      </PopupWithForm>

      <ImagePopup onClose={props.onClose} card={props.selectedCard} />
    </main>
  )
}

export default Main;