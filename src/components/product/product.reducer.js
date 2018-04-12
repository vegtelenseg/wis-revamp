import createAction from '../../helpers/actionCreator';

const initialState = {
  name: null,
  manufacturer: null,
  bestBefore: null,
  checkoutRate: null,
  inStock: null,
  price: null
};

const productActionTypes = {
  SET_ITEM_CHECKOUT_RATE: 'SET_ITEM_CHECKOUT_RATE',
  SET_ITEMS_IN_STOCK: 'SET_ITEMS_IN_STOCK'
};

export const productActions = {
  setItemCheckoutRate: item =>
    createAction(productActionTypes.SET_ITEM_CHECKOUT_RATE, item),
  setItemsInStock: item =>
    createAction(productActionTypes.SET_ITEMS_IN_STOCK, item)
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActionTypes.SET_ITEM_CHECKOUT_RATE:
      console.log('Checkout: ', action.payload.productCheckoutRate);
      return {
        ...state,
        checkoutRate: action.payload.productCheckoutRate
      };
    case productActionTypes.SET_ITEMS_IN_STOCK:
      return {
        ...state,
        inStock: action.payload.productQty
      };
    default:
      return state;
  }
}
