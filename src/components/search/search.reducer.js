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
          name: 'Siya',
          lat: -26.107567,
          lng: 28.056702
        },
        {
          name: 'Mo',
          lat: -26.127567,
          lng: 28.076702
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
