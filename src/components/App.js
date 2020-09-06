import React from 'react';
import Header from './Header.js'
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [isEditProfileModalOpen, toggleProfileModal] = React.useState(false);
  const [isAddPlaceModalOpen, togglePlaceModal] = React.useState(false);
  const [isEditAvatarModalOpen, toggleAvatarModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
   toggleAvatarModal(true);
  }

  function handleEditProfileClick() {
   toggleProfileModal(true);
  }
 
  function handleAddPlaceClick() {
   togglePlaceModal(true);
  }

  function closeAllPopups() {
   toggleProfileModal(false);
   togglePlaceModal(false);
   toggleAvatarModal(false);
   setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  return (
    <div className="content">
    <div className="page">
      <Header />
      <Main 
      isEditProfileOpen={isEditProfileModalOpen}
      onEditProfile={handleEditProfileClick}
      isAddPlaceOpen={isAddPlaceModalOpen}
      onAddPlace={handleAddPlaceClick}
      isEditAvatarOpen={isEditAvatarModalOpen}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={(card) => handleCardClick(card)}
      selectedCard={selectedCard}
      onClose={closeAllPopups}
      />
      <Footer />
    </div>
    </div>
  );
}

export default App;
