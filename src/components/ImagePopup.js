function ImagePopup(props){
  console.log(props)
    return(
        <div className= {`popup popup_preview ${props.card ? "popup_active":""}` } onClick={props.onClose}>
        <form className="popup__container-preview" method="POST" name="popup-container">
          <button className="popup__close popup__close_preview" type="button" onClick={props.onClose}/>
          <figure className="preview">
            <img className="preview__img" alt="фото" src={props.card.src} />
            <figcaption className="preview__signature">{props.card.name}</figcaption>
          </figure>
        </form>
      </div>
    )
}
export default ImagePopup