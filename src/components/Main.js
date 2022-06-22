import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
   
    React.useEffect(() => {
        api.getUserData()
        .then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
        .then(data => {
            setCards(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar opacity-link">
                    <img className="profile__image" src={userAvatar} alt="Аватар"/>
                    <button className="profile__avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>   
                </div>    
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button opacity-link" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button opacity-link" aria-label="Добавить фото" onClick={props.onAddCard}></button>
            </section>
            
            <section className="elements page__section">
                {cards.map((item) => (
                    <Card key={item['_id']} card={item} onCardClick={props.onCardClick}/>)
                )}
            </section>
        </main>
    );
}

export default Main;