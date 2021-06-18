import addVector from '../images/add-vector.svg'
import editButton from '../images/Edit-Button.svg'
import api from '../utils/api.js';
import Card from './Card';
import React from 'react';


function Main (props){
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription ] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(()=>{
    api.getUserInfo()
    .then(res=>{
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
    .catch(res=>{
      console.log(`Error:${res}`)
    })
  },[])


  const [cards, setCards] = React.useState([])

  React.useEffect(()=>{
    api.getInitialCards()
    .then(res =>{
      setCards(res)
    })
    .catch(res=>{
      console.log(`Error:${res}`)
    })
  }
  ,[])
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
                      {cards.map((item, i) => (
                          <div key={i}>
                          <Card dataCards = {item} onCardClick={props.onCardClick}/>
                          </div>
                        ))}
                  </div>
            </section>
          </main>
          
          <div className="popup popup_delet">
            <form className=" popup__container-delet">
              <button className="popup__close popup__close_yes" type="button" />
              <p className="popup__title popup__question">Вы уверены?</p>
              <button type="submit" className="popup__btn-yes">Да</button>
            </form>
          </div>
         
        </>
    )
}

export default Main;