const defaultState = {
  cart: [],
};

const gameStoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.cart.find(item => item.id === action.item.id)
        ? state
        : {
          ...state,
          cart: [...state.cart, action.item],
        };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.item.id)
      };
    default:
      return state;
  }
};

export default gameStoreReducer;
