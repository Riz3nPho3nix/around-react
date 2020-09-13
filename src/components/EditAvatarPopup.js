import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  
  const avatarInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInput
    });
    props.onClose();
  }
  
  return(
    <PopupWithForm name='new-avatar' title='Change Profile Picture' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input ref={avatarInput} className='modal__input' name='avatar' type="url" placeholder="Image link" required />
    </PopupWithForm>
  )}

export default EditAvatarPopup;