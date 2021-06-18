function PopupWithForm (props){
    return(
        
          <div className={`popup popup${props.name} ${props.isOpen ? "popup_active":""}` }  >
            <form className="popup__container  " method="POST" name={props.name}  autoComplete="off" >
              <button className="popup__close" type ="button" onClick ={ props.onClose }/>
              <h3 className="popup__title">{props.title}</h3>
              {props.children}
              <button type="submit" className="popup__save-btn popup__save-btn_disabled" disabled>Сохранить</button>
            </form>
          </div>
        
    )
}
export default PopupWithForm