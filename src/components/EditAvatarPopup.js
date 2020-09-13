import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  
  const [avatar, updateAvatar] = React.useState('');
  const avatarInput = React.useRef(avatar);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar
    });
    props.onClose();
  }

  function handleAvatarInputChange(e) {
    updateAvatar(e.target.value);
  }
  
  return(
    <PopupWithForm name='new-avatar' title='Change Profile Picture' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input ref={avatarInput} className='modal__input' name='avatar' type="url" placeholder="Image link" required onChange={handleAvatarInputChange} />
    </PopupWithForm>
  )}

export default EditAvatarPopup;