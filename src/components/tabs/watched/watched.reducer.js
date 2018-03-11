import createAction from '../../../helpers/actionCreator';
import { getProductByNameFromDB } from '../../../services/services';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  watchedItems: []
};

const watchedActionTypes = {
  SET_ITEM_NAME: 'SET_ITEM_NAME',
  SET_FOUND_ITEMS: 'SET_FOUND_ITEMS',
  SET_IS_FETCHING: 'SET_IS_FETCHING'
};

export const watchedActions = {
  setItemName: name => createAction(watchedActionTypes.SET_ITEM_NAME, name),
  setWatchedProduct: product => createAction(watchedActionTypes.SET_FOUND_ITEMS, product),
  setIsFetching: predicate => createAction(watchedActionTypes.SET_IS_FETCHING, predicate)
};

export const fetchWatchedItemsThunk = (name, activeTab) => (dispatch, getState) => {
  if (!getState().isFetchingItems) {
    dispatch(watchedActions.setIsFetching(true));
    return getProductByNameFromDB(name).then(product =>
      dispatch(watchedActions.setWatchedProduct(product))
    );
  }
};

export default function watchedReducer(state = initialState, action) {
  switch (action.type) {
    case watchedActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case watchedActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case watchedActionTypes.SET_FOUND_ITEMS:
      return {
        ...state,
        watchedItems: action.payload,
        isFetchingItems: false
      };
    default:
      return state;
  }
}
