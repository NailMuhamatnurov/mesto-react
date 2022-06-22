import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <div className="element__photo">
                <img className="element__image" src={props.card.link} alt={`Фото ${props.card.name}`} onClick={handleClick}/>
                <button className="element__basket opacity-link" type="button" aria-label="Корзина"></button>
            </div>
            <div className="element__subtitle">
                <h2 className="element__title">{props.card.name}</h2>
                <button className="element__like" type="button" aria-label="Лайк">
                    <p className="element__like-sum">{props.card.likes.length}</p> 
                </button>
            </div>
        </div>
    )
}

export default Card;