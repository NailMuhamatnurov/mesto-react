export const objectSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: 'popup__submit-button_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active' 
};

export const selectorObj = {
    popupImageSelector: '.popup_type_photo',
    popupProfileSelector: '.popup_type_edit',
    popupAddCardSelector: '.popup_type_add',
    popupProfileAvatar: '.popup_type_avatar',
    popupPhotoRemove: '.popup_type_question',
    elementsSelector: '.elements',
    profileNameSelector: '.profile__name',
    profileDescriptionSelector: '.profile__description',
    cardId: '#card',
};

export const profileEdit = document.querySelector('.popup_type_edit');
export const placeAdd = document.querySelector('.popup_type_add');
export const photoPopup = document.querySelector('.popup_type_photo'); 
export const popupProfileInputs = profileEdit.querySelectorAll('.popup__input');

export const formElementEdit = profileEdit.querySelector('.popup__form');
export const formElementAdd = placeAdd.querySelector('.popup__form');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-button');
export const buttonEditClose = profileEdit.querySelector('.popup__close');
export const buttonAddClose = placeAdd.querySelector('.popup__close');
export const buttonPhotoPopupClose = photoPopup.querySelector('.popup__close');
export const buttonSubmit = formElementAdd.querySelector('.popup__submit-button');

export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileAvatar = document.querySelector('.profile__image');


export const nameInput = document.getElementById('name');
export const jobInput = document.getElementById('description');
export const cardName = document.getElementById('place');
export const cardLink = document.getElementById('image-link');

export const popupPhotoLink = photoPopup.querySelector('.popup__photo'); 
export const popupPhotoTitle = photoPopup.querySelector('.popup__photo-title');

export const container = document.querySelector('.elements');
export const template = '.elements-template';

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 