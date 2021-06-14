function ImagePopup(){
    return(
        <div className="popup popup_preview">
        <form className="popup__container-preview" method="POST" name="popup-container">
          <button className="popup__close popup__close_preview" type="button" />
          <figure className="preview">
            <img className="preview__img" alt="фото" src="#" />
            <figcaption className="preview__signature" />
          </figure>
        </form>
      </div>
    )
}
export default ImagePopup