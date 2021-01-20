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
