import avataKysto from '../images/avata-kysto.jpg'
import addVector from '../images/add-vector.svg'
import editButton from '../images/Edit-Button.svg'
import api from './api';
function Main (props){

  // const [userName, setuserName] = React.useState();
  const [userDescription , setuserDescription ] = React.useState();
  // const [userAvatar, setuserAvatar] = React.useState();

    return(
        <>
           <main className="page">
            <section className="profile">
              <div className="profile__top-avatar">
                <button className="profile__avatar-edit" type="button"  onClick={props.onEditAvatar} > 
                  <img className="profile__avatar" src={avataKysto} alt="автарка автора" />
                </button>
              </div>
              <div className="profile__info">
                <div className="profile__header-info">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button className="profile__edit-btn" type="button"><img className="profile__icon" onClick={props.onEditProfile} src={editButton} alt="кнопка добавление автора" /></button>
                </div>
                <p className="profile__work">Исследователь океана</p>
              </div>
              <button className="profile__add-btn" type="button" onClick={props.onAddPlace}><img src={addVector} alt="кнопка добавление фото" /></button>
            </section>
            <section className="elements">
              <article className="element">   
              </article>
            </section>
          </main>

          <div className="popup popup_profile">
            <form className="popup__container popup__container_profile " method="POST" name="popup-container" noValidate autoComplete="off">
              <button className="popup__close popup__close_profile " type="button" />
              <h3 className="popup__title">Редактировать профиль</h3>
              <input id="name-input" className="popup__input" type="text" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
              <span id="name-input--error" className="popup__input-error" />
              <input id="work-input" className="popup__input " type="text" name="work" placeholder="О себе" required minLength={2} maxLength={200} />
              <span id="work-input--error" className="popup__input-error" />
              <button type="submit" className="popup__save-btn popup__save-btn_disabled" disabled>Сохранить</button>
            </form>
          </div>
          <div className="popup popup_add-cards">
            <form className="popup__container popup__container_cards" action="#" method="POST" name="popup-container" noValidate>
              <button className="popup__close popup__close-cards" type="button" />
              <h3 className="popup__title">Новое место</h3>
              <input id="description-card" className="popup__input popup__input-description " type="text" placeholder="Название" required />
              <span id="description-card--error" className="popup__input-error" />
              <input className="popup__input popup__input-images" id="url-card" type="url" placeholder="Ссылка на картинку" required />
              <span id="url-card--error" className="popup__input-error" />
              <button type="submit" className="popup__save-btn popup__save-btn_disabled" disabled>Сохранить</button>
            </form>
          </div>
          <div className="popup popup_avatar">
            <form className="popup__container popup__container-avatar" action="#" method="POST" name="popup-container" noValidate>
              <button className="popup__close popup__close_yes" type="button" />
              <p className="popup__question popup__question-avatar">Обновить аватар</p>
              <input className="popup__input popup__input-avatar" id="url-avatar" name="avatar" type="url" placeholder="Ссылка на новый аватар" required />
              <span id="url-avatar--error" className="popup__input-error " />
              <button type="submit" className="popup__save-btn popup__save-btn_disabled popup__btn-position" disabled>Сохранить</button>
            </form>
          </div>
          <div className="popup popup_delet">
            <form className=" popup__container-delet">
              <button className="popup__close popup__close_yes" type="button" />
              <p className="popup__question">Вы уверены?</p>
              <button type="submit" className="popup__btn-yes">Да</button>
            </form>
          </div>
         
        </>
    )
}

export default Main;