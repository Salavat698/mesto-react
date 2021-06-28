import addVector from '../images/add-vector.svg'
import editButton from '../images/Edit-Button.svg'
import Card from './Card';
import React from 'react';
// import api from '../utils/api'
import { CurrentUserContext} from '../contexts/CurrentUserContext';
// import { CurrentCardsContext} from '../contexts/CurrentCardsContext';


function Main (props){
  const translationUser = React.useContext(CurrentUserContext);
  // const translationCards = React.useContext(CurrentCardsContext);
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  
  React.useEffect(()=>{
      setUserName(translationUser.name)
      setUserDescription(translationUser.about)
      setUserAvatar(translationUser.avatar)
  },[translationUser])




    return(
        <>
           <main className="page">
            <section className="profile">
              <div className="profile__top-avatar">
                <button className="profile__avatar-edit" type="button"  onClick={props.onEditAvatar} > 
                  <img className="profile__avatar" src={userAvatar} alt="автарка автора" />
                </button>
              </div>
              <div className="profile__info">
                <div className="profile__header-info">
                  <h1 className="profile__name" >{userName}</h1>
                  <button className="profile__edit-btn" type="button"><img className="profile__icon" onClick={props.onEditProfile} src={editButton} alt="кнопка добавление автора" /></button>
                </div>
                <p className="profile__work">{userDescription}</p>
              </div>
              <button className="profile__add-btn" type="button" onClick={props.onAddPlace}><img src={addVector} alt="кнопка добавление фото" /></button>
            </section>
         
            <section className="elements">

                  <div className="element">
                      {Array.from(props.cards).map((item) => (
                          <Card 
                          key={item._id} 
                          dataCards = {item} 
                          onCardClick={props.onCardClick}
                          onCardLike ={props.onCardLike}
                          onCardDelete ={props.onCardDelete}
                          />
                        ))}
                  </div>
            </section>
          </main>
          
          {/* <div className="popup popup_delet">
            <form className=" popup__container-delet">
              <button className="popup__close popup__close_yes" type="button" />
              <p className="popup__title popup__question">Вы уверены?</p>
              <button type="submit" className="popup__btn-yes">Да</button>
            </form>
          </div> */}
         
        </>
    )
}

export default Main;