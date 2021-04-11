import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initState = {
  products: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };
    }
    case REMOVE_PRODUCT: {
      const newProductsList = state.products.filter(el => el.id !== action.payload.productId);
      return {
        ...state,
        products: newProductsList,
      };
    }
    default:
      return state;
  }
};
