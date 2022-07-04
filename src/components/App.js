import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import ImagePopup from './ImagePopup';
import { TranslationContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteQuestionForm from './DeleteQuestionForm';

function App() {
  
    const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
    const [isAddPlacePopupOpen, setAddCardClick] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({element: {}, isOpen: false});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [selectedCardDeleteQuestion, setSelectedCardDeleteQuestion] = React.useState({isOpen: false, card: {}});
    const [renderSaving, setRenderSaving] = React.useState(false);
    
    React.useEffect(() => {
        api.getUserData()
        .then(data => {
            setCurrentUser(data);
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

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        setRenderSaving(true);
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id === card._id ? false : true))
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
              })    
            .finally(() => {
                setRenderSaving(false);
            });    
    }

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

    function handleDeleteCardClick(card) {
        setSelectedCardDeleteQuestion({...selectedCardDeleteQuestion, isOpen: true, card: card});
    }

    function closeAllPopups() {
        setEditAvatarClick(false);
        setEditProfileClick(false);
        setAddCardClick(false);
        setSelectedCard({element: {}, isOpen: false});
        setSelectedCardDeleteQuestion({...selectedCardDeleteQuestion, isOpen: false});
    }

    function handleUpdateUser(userInfo) {
        setRenderSaving(true);
        api.saveUserInfo(userInfo)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch(err => {
                console.log('Ошибка ' + err);
            })
            .finally(() => {
                setRenderSaving(false);
            });
    }

    function handleUpdateAvatar(avatarInfo) {
        setRenderSaving(true);
        api.changeAvatar(avatarInfo)
            .then((data) => {
                setCurrentUser({...currentUser, avatar: data.avatar}); 
                closeAllPopups();
            })
            .catch(err => {
                console.log('Ошибка ' + err);
            })
            .finally(() => {
                setRenderSaving(false);
            }); 
    }

    function handleUpdatePlace(cardInfo) {
        setRenderSaving(true);
        api.addNewCard(cardInfo)
        .then((data) => {
            setCards([data, ...cards]);
            closeAllPopups();
        })
        .catch(err => {
            console.log('Ошибка ' + err);
        })
        .finally(() => {
            setRenderSaving(false);
        });   
    }

    return (
        <TranslationContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main 
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick} 
                    onAddCard={handleAddCardClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    card={cards}
                    onCardDelete={handleDeleteCardClick}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isRender={renderSaving}/>
                
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isRender={renderSaving}/>

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdatePlace={handleUpdatePlace} isRender={renderSaving}/>

                <DeleteQuestionForm deleteCard={selectedCardDeleteQuestion} onClose={closeAllPopups} onDeleteCard={handleCardDelete} isRender={renderSaving}/>

                <Footer />
            </div> 
        </TranslationContext.Provider> 
    
    );
};

export default App;
