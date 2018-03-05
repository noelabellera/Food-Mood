import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return userAPI.login(creds)
    .then(token => tokenService.setToken(token));
}

function saveFavorite(favorite) {
  return userAPI.saveFavorite(favorite)
}

function removeFavorite(favoriteId) {
  return userAPI.removeFavorite(favoriteId)
}

export default {
  signup,
  getUser,
  logout,
  login, 
  saveFavorite,
  removeFavorite
}