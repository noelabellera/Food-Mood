import tokenService from './tokenService';
const BASE_URL = '/api/users/';
// const BASE_URL2 = '/api/favorites/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Email already taken!');
    })
    .then(({token}) => token);
  }
  
  function login(creds) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials');
    })
    .then(({token}) => token);
  }

  function saveFavorite(favorite) {
    return fetch(BASE_URL + 'favorites', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': tokenService.getToken()
      }),
      body: JSON.stringify(favorite),
    }) 
    .then(res => {
      if (res.ok) return res.json();
    }).catch(err => console.log(err))
  }
  
  export default {
    signup,
    login,
    saveFavorite
  };