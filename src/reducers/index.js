const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const { myList } = state;
      const { id } = action.payload.video;
      if (myList.some((video) => video.id === id)) {
        return state;
      }
      return { ...state, myList: [...myList, action.payload.video] };
    }
    case 'DELETE_FAVORITE': {
      return {
        ...state,
        myList: state.myList.filter((video) => video.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

export default reducer;
