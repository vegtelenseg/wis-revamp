import createAction from '../../helpers/actionCreator';
import { getProductByName } from '../../services/services';

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
  setItemName: name => createAction(searchActionTypes.SET_ITEM_NAME, name),
  isFetching: predicate => createAction(searchActionTypes.IS_FETCHING, predicate),
  foundProduct: product => createAction(searchActionTypes.FOUND_ITEMS, product)
};

export const fetchItemsThunk = name => (dispatch, getState) => {
  if (!getState().isFetching) {
    dispatch(searchActions.isFetching(true));
    getProductByName(name).then(product => dispatch(searchActions.foundProduct(product)));
  }
};

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
        isFetchingItems: action.payload
      };
    case searchActionTypes.FOUND_ITEMS:
      return {
        ...state,
        foundItems: action.payload,
        isFetchingItems: false
      };
    default:
      return state;
  }
}
