import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext} from '../contexts/CurrentUserContext';
import { CurrentCardsContext} from '../contexts/CurrentCardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick (){
    setIsEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick (){
     setIsEditProfilePopupOpen (true)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick (){
    setIsAddPlacePopupOpen(true)
  }

  const [selectedCard, setSelectedCard] = React.useState({});
  const handleCardClick = (card) => {
  setSelectedCard(card)
}
  
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen (false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }


 
//закрытие попап по ESC
  React.useEffect(() => {
    const handleEsc = (event) => {
      const btnEscape = 27;
       if (event.keyCode === btnEscape) {
        closeAllPopups()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  const [currentUser,setCurrentUser] = React.useState({})
  React.useEffect(()=>{
    api.getUserInfo()
    .then(res =>{
      setCurrentUser(res)
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  },[])
  


  function handleUpdateUser (e){
    api.updateUser(e)
    .then((res)=>{
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  }

  function handleUpdateAvatar(e){
    api.updateAvatar(e)
    .then((res)=>{
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  }

  // card


  const [currentCards,setCurrentCards] = React.useState([])
  
  React.useEffect(()=>{
    api.getInitialCards()
    .then( res =>{
      setCurrentCards(res)
    })
    .catch(res=>{
      console.log(`Error:${res}`)
    })
  },[])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCurrentCards((currentCards) => currentCards.map((c) => c._id === card._id ? newCard : c));
    });
  }

 
  function handleCardDelete (card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isOwn = card.owner._id === currentUser._id;
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeCardStatus(card._id, isOwn)
    .then((newCard) => {
      setCurrentCards((currentCards) => [...currentCards].filter((c) => c._id === card._id ? console.log(newCard) : c));
    });

   }


   function handleAddPlaceSubmit(e){
    api.addCard(e)
    .then( newCard =>{
      setCurrentCards([newCard, ...currentCards]);
      closeAllPopups();
    })
    .catch(newCard=>{
      console.log(`Ошибка:${newCard}`)
    })
   }

  return (
   
        <div className="App body-background">
          <CurrentCardsContext.Provider value={currentCards}>
            <CurrentUserContext.Provider value={currentUser}>
                <Header/>
                <Main 
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace ={handleAddPlaceClick}
                onCardClick={handleCardClick}

                cards = {currentCards} 
                onCardLike ={handleCardLike}
                onCardDelete ={handleCardDelete}
                />
                <Footer/>
                <EditProfilePopup onUpdateUser ={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                <EditAvatarPopup onUpdateAvatar ={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                <AddPlacePopup onAddPlace ={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
          
        

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </CurrentUserContext.Provider>
          </CurrentCardsContext.Provider>
        
        </div>
   
  );
}

export default App;
