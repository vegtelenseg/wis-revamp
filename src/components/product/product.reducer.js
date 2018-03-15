import createAction from '../../helpers/actionCreator';

const initialState = {
  name: '',
  manufacturer: '',
  bestBefore: new Date(),
  checkoutRate: Math.floor(Math.random()),
  inStock: Math.ceil(Math.random())
};

const productActionTypes = {
  SET_ITEM_CHECKOUT_RATE: 'SET_ITEM_CHECKOUT_RATE',
  SET_ITEMS_IN_STOCK: 'SET_ITEMS_IN_STOCK'
};

export const productActions = {
  setItemCheckoutRate: itemId =>
    createAction(productActionTypes.SET_ITEM_CHECKOUT_RATE, 20),
  setItemsInStock: itemId =>
    createAction(productActionTypes.SET_ITEMS_IN_STOCK, 12)
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActionTypes.SET_ITEM_CHECKOUT_RATE:
      return {
        ...state,
        checkoutRate: action.payload
      };
    case productActionTypes.SET_ITEMS_IN_STOCK:
      return {
        ...state,
        inStock: action.payload
      };
    default:
      return state;
  }
}
