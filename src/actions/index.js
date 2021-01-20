export const setFavorite = (video) => {
  return {
    type: 'SET_FAVORITE',
    payload: { video },
  };
};

export const deleteFavorite = (id) => {
  return {
    type: 'DELETE_FAVORITE',
    payload: { id },
  };
};

export const loginRequest = (credentials) => {
  return {
    type: 'LOGIN_REQUEST',
    payload: { user: credentials },
  };
};

export const logoutRequest = () => {
  return {
    type: 'LOGOUT_REQUEST',
  };
};

export const registerRequest = (credentials) => {
  return {
    type: 'REGISTER_REQUEST',
    payload: { newUser: credentials },
  };
};
