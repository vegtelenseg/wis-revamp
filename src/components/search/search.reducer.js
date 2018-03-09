const initialState = {
  searchQuery: 'Bread',
  isFetchingItems: false,
  foundItems: []
};

const searchActionTypes = {
  SET_ITEM_NAME: 'SET_ITEM_NAME',
  FETCH_ITEMS: 'FETCH_ITEMS'
};

export const searchActions = {
  setItemName: function(name) {
    return {
      type: searchActionTypes.SET_ITEM_NAME,
      payload: name
    };
  },
  fetchItems: function(name) {
    return {
      type: searchActionTypes.FETCH_ITEMS,
      payload: [
        {
          bestBefore: '8/12/18',
          checkoutRate: 6,
          inStock: 14,
          lng: 28.05474,
          lat: -26.107686,
          price: 15,
          productBrand: 'Lads',
          productName: 'bread'
        },
        {
          bestBefore: '9/11/19',
          checkoutRate: 7,
          inStock: 72,
          lng: 28.05574,
          lat: -26.107786,
          price: 25,
          productBrand: 'TigerBrand',
          productName: 'bread'
        },
        {
          bestBefore: '16/01/20',
          checkoutRate: 10,
          inStock: 27,
          lng: 28.08574,
          lat: -26.127786,
          price: 30,
          productBrand: 'TigerBrand',
          productName: 'bread'
        }
      ]
    };
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case searchActionTypes.FETCH_ITEMS:
      return {
        ...state,
        isFetchingItems: false,
        foundItems: action.payload
      };
    case searchActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload,
        isFetchingItems: true
      };
    default:
      return state;
  }
}
