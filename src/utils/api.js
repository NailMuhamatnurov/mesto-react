class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._userUrl = `${this._baseUrl}/users/me`;
        this._cardsUrl = `${this._baseUrl}/cards`;
        this._likeUrl = `${this._baseUrl}/cards/likes`;
        this._token = headers['authorization'];
    }

    getInitialCards() {
        return fetch(this._cardsUrl, {
            headers: {
                authorization: this._token,
            }
        })
        .then(res => {
            if(res.ok) {
                const infa = res.json();  
                return infa;
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getUserData() {
        return fetch(this._userUrl, {
            headers: {
                authorization: this._token,
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    changeAvatar(src) {
        return fetch(`${this._userUrl}/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: src
            })
            })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    saveUserInfo({
        name,
        about
        }) {
        return fetch(this._userUrl, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about,
            })
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          })
    }

    addNewCard({
        name,
        link
    }) {
         return fetch(this._cardsUrl, {
             method: 'POST',
             headers: {
                 authorization: this._token,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 name: name,
                 link: link,
             })
           })
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
               return Promise.reject(`Ошибка: ${res.status}`);
           })
    }

    changeLikeCardStatus(cardId, isLiked){
        return fetch(`${this._likeUrl}/${cardId}`, {
            method: isLiked ? "PUT" : "DELETE",
            headers: {
                authorization: this._token,
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._cardsUrl}/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
      authorization: 'e471957f-85d9-4bfd-be28-cfa537c03528',
      'Content-Type': 'application/json'
    }
  });

export default api;