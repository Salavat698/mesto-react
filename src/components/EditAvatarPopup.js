import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditAvatarPopup(props){
    const avatarRef = React.useRef();
    


    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(
          avatarRef.current.value
        );
      }
    return(
        <PopupWithForm onSubmit={handleSubmit} name ="popup_profile "  isOpen={props.isOpen} onClose={props.onClose}>
            <p className="popup__title popup__question popup__question-avatar">Обновить аватар</p>
            <input className="popup__input popup__input-avatar"  ref={avatarRef} id="url-avatar" name="avatar" type="url" placeholder="Ссылка на новый аватар" required />
            <span id="url-avatar--error" className="popup__input-error " />
        </PopupWithForm>
    )
}
export default EditAvatarPopup;