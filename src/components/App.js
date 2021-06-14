import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// import PopupWithForm from './PopupWithForm';
// import ImagePopup from './ImagePopup';
function App() {

  function handleEditAvatarClick (){
    document.querySelector('.popup_avatar').classList.add('popup_active');
  }
  function handleEditProfileClick (){
    document.querySelector('.popup_profile').classList.add('popup_active');
  }
  function handleAddPlaceClick (){
    document.querySelector('.popup_add-cards').classList.add('popup_active');
  }


  return (
    <div className="App body-background">
          <Header/>
          <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace ={handleAddPlaceClick}/>
          <Footer/>

    </div>
  );
}

export default App;
