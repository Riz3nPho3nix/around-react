import React from 'react';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <main className="main">
        <section className="profile">
            <div className="profile__avatar">
              <img alt="Profile portrait" className="profile__picture" src={currentUser.avatar}/>
              <button className="profile__overlay" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__job">{currentUser.about}</p>
              <button className="profile__edit link" aria-label="Edit Profile" onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add-btn link" onClick={props.onAddPlace}></button>
        </section>
        <ul className="cards">
          {props.cards.map((card) => {
            return <Card key={card._id} card={card} onCardLike={(card) => {props.onCardLike(card)}} onCardClick={(card) => {props.onCardClick(card)}} onCardDelete={(card) => {props.onCardDelete(card)}} />
          })}
        </ul>
      <EditProfilePopup isOpen={props.isEditProfileOpen} onClose={props.onClose} onUpdateUser={(userInfo) => {props.onUpdateUser({userInfo})}} />

      <AddPlacePopup isOpen={props.isAddPlaceOpen} onClose={props.onClose} onAddCard={(cardInfo) => {props.onAddCard(cardInfo)}} />

      <EditAvatarPopup isOpen={props.isEditAvatarOpen} onClose={props.onClose} onUpdateAvatar={(url) => {props.onUpdateAvatar(url)}} />

      <ImagePopup onClose={props.onClose} card={props.selectedCard} />
    </main>
    </CurrentUserContext.Provider>
  )
}

export default Main;