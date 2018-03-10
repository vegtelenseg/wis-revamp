import axios from 'axios';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  foundItems: []
};

const searchActionTypes = {
  SET_ITEM_NAME: 'SET_ITEM_NAME',
  IS_FETCHING: 'IS_FETCHING',
  FOUND_ITEMS: 'FOUND_ITEMS'
};

export const searchActions = {
  setItemName: function(name) {
    return {
      type: searchActionTypes.SET_ITEM_NAME,
      payload: name
    };
  },
  isFetching: function(predicate) {
    return {
      type: searchActionTypes.IS_FETCHING,
      payload: predicate
    };
  },
  foundProduct: product => ({
    type: searchActionTypes.FOUND_ITEMS,
    payload: product
  })
};

export const fetchItemsThunk = name => (dispatch, getState) => {
  if (!getState().isFetching) {
    dispatch(searchActions.isFetching(true));
    getProductByName(name).then(product => dispatch(searchActions.foundProduct(product)));
  }
};

const getProductByName = name =>
  axios
    .get('./mock-data/products.json')
    .then(products => products.data)
    .catch(err => {
      console.error('Could not retrieve products: ', err);
    });

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case searchActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case searchActionTypes.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case searchActionTypes.FOUND_ITEMS:
      return {
        ...state,
        foundItems: action.payload
      };
    default:
      return state;
  }
}
