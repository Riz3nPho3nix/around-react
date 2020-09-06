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
    });
  });

  api.getInitialCards()
  .then (cards => {setCards(cards)});

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
      <PopupWithForm name='profile-edit' title='Edit Profile' isOpen={props.isEditProfileOpen} close={props.onClose}>
        <input className='modal__input' name='name' type="text" minLength="2" maxLength="40" required />
        <input className='modal__input' name='about' type="text" minLength="2" maxLength="200" required />
      </PopupWithForm>
{/*   <div className="profile-edit modal">
        <div className="modal__window">
          <button className="modal__close link"></button>
          <form action="submit" className="modal__form" noValidate>
            <h2 className="modal__heading">Edit Profile</h2>
            <label className="modal__label">
            <input id="profile-name" className="modal__input set_name" type="text" name="name" minLength="2" maxLength="40" required />
            <span id="profile-name-error" className="modal__error"></span>
            </label>
            <label className="modal__label">
            <input id="profile-job" className="modal__input set_job" type="text" name="about" minLength="2" maxLength="200" required />
            <span id="profile-job-error" className="modal__error"></span>
            </label>
            <button className="modal__button button">Save</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name='new-card' title='New Place' isOpen={props.isAddPlaceOpen} close={props.onClose}>
        <input className='modal__input' name='name' type="text" placeholder="Title" minLength="1" maxLength="30" required />
        <input className='modal__input' name='link' type="url" placeholder="Image link" required />
      </PopupWithForm>
{/*   <div className="new-card modal">
        <div className="modal__window">
          <button className="modal__close link"></button>
          <form action="submit" className="modal__form" noValidate>
            <h2 className="modal__heading">New place</h2>
            <label className="modal__label">
            <input id="card-title" className="modal__input location" type="text" name="name" placeholder="Title" minLength="1" maxLength="30" required />
            <span id="card-title-error" className="modal__error"></span>
            </label>
            <label className="modal__label">
            <input id="card-url" className="modal__input image-path" type="url" name="link" placeholder="Image link" required />
            <span id="card-url-error" className="modal__error"></span>
            </label>
            <button className="modal__button button">Save</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name='new-avatar' title='Change Profile Picture' isOpen={props.isEditAvatarOpen} close={props.onClose}>
        <input className='modal__input' name='avatar' type="url" placeholder="Image link" required />
      </PopupWithForm>
{/*   <div className="new-avatar modal">
        <div className="modal__window">
          <button className="modal__close link"></button>
          <form action="submit" className="modal__form" noValidate>
            <h2 className="modal__heading">Change profile picture</h2>
            <label className="modal__label">
            <input id="avatar-url" className="modal__input avatar-image" type="url" name="avatar" placeholder="Image link" required />
            <span id="avatar-url-error" className="modal__error"></span>
            </label>
            <button className="modal__button button">Save</button>
          </form>
        </div>
      </div> */} 
      
{/*   <div className="delete-card modal">
        <div className="modal__window">
          <button className="modal__close link"></button>
          <form action="submit" className="modal__form" noValidate>
            <h2 className="modal__heading">Are you sure?</h2>
            <input type="hidden" className="modal__input card-id" name="id" />
            <button className="modal__button button">Yes</button>
          </form>
        </div>
      </div>  */}
      <ImagePopup isOpen={props.isImagePopupOpen} close={props.onClose} card={props.selectedCard} />
    </main>
  )
}

export default Main;