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
  setItemCheckoutRate: function(itemId) {
    // Find product from DB and return its new check-out rate here
    const newItemCheckoutRate = 10;
    return {
      type: productActionTypes.SET_ITEM_CHECKOUT_RATE,
      payload: newItemCheckoutRate
    };
  },
  setItemsInStock: function(itemId) {
    // Find product from DB and return its new check-out rate here
    const itemsInStock = 100;
    return {
      type: productActionTypes.SET_ITEMS_IN_STOCK,
      payload: itemsInStock
    };
  }
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
