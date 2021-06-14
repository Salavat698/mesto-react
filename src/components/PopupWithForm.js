function PopupWithForm (props){
    return(
        
          <div className={`popup popup${props.name}`}  >
            <form className="popup__container  " method="POST" name={props.name} noValidate autoComplete="off">
              <button className="popup__close popup__close_profile " type="button" />
              <h3 className="popup__title">{props.title}</h3>
              <button type="submit" className="popup__save-btn popup__save-btn_disabled" disabled>Сохранить</button>
            </form>
          </div>
        
    )
}
export default PopupWithForm