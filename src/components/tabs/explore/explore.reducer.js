import createAction from '../../../helpers/actionCreator';
import { getProductByNameFromDB } from '../../../services/services';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  foundItems: []
};

const exploreActionTypes = {
  SET_ITEM_NAME: 'SET_ITEM_NAME',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
  SET_FOUND_ITEMS: 'SET_FOUND_ITEMS'
};

export const exploreActions = {
  setItemName: name => createAction(exploreActionTypes.SET_ITEM_NAME, name),
  setIsFetching: predicate => createAction(exploreActionTypes.SET_IS_FETCHING, predicate),
  setFoundProduct: product => createAction(exploreActionTypes.SET_FOUND_ITEMS, product)
};

export const fetchExploreItemsThunk = name => (dispatch, getState) => {
  if (!getState().isFetchingItems) {
    dispatch(exploreActions.setIsFetching(true));
    return getProductByNameFromDB(name).then(product =>
      dispatch(exploreActions.setFoundProduct(product))
    );
  }
};

export default function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case exploreActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case exploreActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case exploreActionTypes.SET_FOUND_ITEMS:
      return {
        ...state,
        foundItems: action.payload,
        isFetchingItems: false
      };
    default:
      return state;
  }
}
