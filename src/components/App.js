import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React from 'react';
import ImagePopup from './ImagePopup';

function App() {
  
    const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
    const [isAddPlacePopupOpen, setAddCardClick] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({element: {}, isOpen: false});
    
    function handleEditAvatarClick() {
        setEditAvatarClick(true);
    }

    function handleEditProfileClick() {
        setEditProfileClick(true);
    }

    function handleAddCardClick() {
        setAddCardClick(true);
    }

    function handleCardClick(card) {
        setSelectedCard({...selectedCard, isOpen: true, element: card});
    }

    function closeAllPopups() {
        setEditAvatarClick(false);
        setEditProfileClick(false);
        setAddCardClick(false);
        setSelectedCard({element: {}, isOpen: false});
    }

    return (
        <div className="page">
            <Header />
            <Main 
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick} 
                onAddCard={handleAddCardClick}
                onCardClick={handleCardClick}
            />

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <PopupWithForm name='avatar' title='Обновить Аватар' button='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input type="url" placeholder="Ссылка на картинку" id="image-link" className="popup__input" name="link" required/>
                <span id="image-link-error" className="popup__input-error" >введите адрес аватара</span>
            </PopupWithForm> 
            
            <PopupWithForm name='profile' title='Редактировать профиль' button='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input type="text" placeholder="Имя" id="name" className="popup__input" minLength="2" maxLength="40" name="name" required/>
                <span id="name-error" className="popup__input-error">вы пропустили это поле</span>
                <input type="text" placeholder="О себе" id="description" className="popup__input" minLength="2" maxLength="200" name="about" required/>
                <span id="description-error" className="popup__input-error" >введите описание карточки</span>
            </PopupWithForm>

            <PopupWithForm name='add' title='Новое место' button='Сохранить' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" placeholder="Название" id="place" className="popup__input" minLength="2" maxLength="30" name="name" required/>
                <span id="place-error" className="popup__input-error" >введите новое место</span>
                <input type="url" placeholder="Ссылка на картинку" id="image-link" className="popup__input" name="link" required/>
                <span id="image-link-error" className="popup__input-error" >введите адрес картинки</span>
            </PopupWithForm>

            <PopupWithForm name='question' title='Вы уверены?' button='Да' onClose={closeAllPopups}/>

            <Footer />
        </div>  
    
    );
};


export default App;
