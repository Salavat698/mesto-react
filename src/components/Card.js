import React from 'react';
import backet from '../images/backet.svg'

function Card (props){
  
  function handleClick() {
    props.onCardClick(props.dataCards);
  } 

    return(
        
        <div className="directors__item">
        <div className="element__header">
          <img className="element__image" 
           alt={props.name}
           src=""
           style={{ backgroundImage: `url(${props.dataCards.link})` }}
           onClick={handleClick}
           />
          <img className="element__backet" src={backet} alt="Корзина для удаление фото-карточки"/>
        </div>
        <div className="element__footer">
          <div className="element__place-travel">{props.dataCards.name}</div>
          <div className="element__likes-group">
            <button className="element__like" type="button" aria-label="Like" />
            <div className="element__likes-click">{props.dataCards.likes.length}</div>
          </div>
        </div>
      </div>
        
    )
}
export default Card