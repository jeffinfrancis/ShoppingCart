export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((itm) => itm.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "RATING":
      return { ...state, rating: action.payload.rating };

    case "PRODUCT_SORT":
      return { ...state, sort: action.payload.sort };

    case "INSTOCK":
      return { ...state, bystock: !state.bystock };

    case "FAST_DELIVERY":
      return { ...state, byfastDelivery: !state.byfastDelivery };

    case "CLEAR_FILTERS":
      return { state: action.payload };

    default:
      return state;
  }
};
