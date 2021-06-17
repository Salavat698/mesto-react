import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick (){
    setIsEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick (){
     setisEditProfilePopupOpen (true)
  }

  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick (){
    setisAddPlacePopupOpen(true)
  }

  const [selectedCard, setselectedCard] = React.useState({});
  const handleCardClick = setselectedCard;
  
  React.useEffect(()=>{
    setselectedCard(false)
  },[])

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setisEditProfilePopupOpen (false)
    setisAddPlacePopupOpen(false)
    setselectedCard(false)
  }


 

  React.useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        closeAllPopups()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="App body-background">
          <Header/>
          <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace ={handleAddPlaceClick}
          onCardClick={handleCardClick}
          />
          <Footer/>
            
          <PopupWithForm popupAllClose='popup' name ="popup_profile "  title ="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
              <input id="name-input" className="popup__input" type="text" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
              <span id="name-input--error" className="popup__input-error" />
              <input id="work-input" className="popup__input " type="text" name="work" placeholder="О себе" required minLength={2} maxLength={200} />
              <span id="work-input--error" className="popup__input-error" />
          </PopupWithForm>

          <PopupWithForm popupAllClose='popup' name ="popup_add-cards "  title ="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <input id="description-card" className="popup__input popup__input-description " type="text" placeholder="Название" required />
              <span id="description-card--error" className="popup__input-error" />
              <input className="popup__input popup__input-images" id="url-card" type="url" placeholder="Ссылка на картинку" required />
              <span id="url-card--error" className="popup__input-error" />
          </PopupWithForm>

          <PopupWithForm popupAllClose='popup' name ="popup_profile "  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <p className="popup__title popup__question popup__question-avatar">Обновить аватар</p>
              <input className="popup__input popup__input-avatar" id="url-avatar" name="avatar" type="url" placeholder="Ссылка на новый аватар" required />
              <span id="url-avatar--error" className="popup__input-error " />
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
