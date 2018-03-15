import createAction from '../../../helpers/actionCreator';
import { getProductByNameFromDB } from '../../../services/services';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  watchedItems: []
};

const watchedActionTypes = {
  SET_WATCHED_ITEM_NAME: 'SET_WATCHED_ITEM_NAME',
  SET_WATCHED_FOUND_ITEMS: 'SET_WATCHED_FOUND_ITEMS',
  SET_WATCHED_IS_FETCHED: 'SET_WATCHED_IS_FETCHED'
};

export const watchedActions = {
  setItemName: name =>
    createAction(watchedActionTypes.SET_WATCHED_ITEM_NAME, name),
  setWatchedProduct: product =>
    createAction(watchedActionTypes.SET_WATCHED_FOUND_ITEMS, product),
  setIsFetching: predicate =>
    createAction(watchedActionTypes.SET_WATCHED_IS_FETCHED, predicate)
};

export const fetchWatchedItemsThunk = (name, activeTab) => (
  dispatch,
  getState
) => {
  if (!getState().isFetchingItems) {
    dispatch(watchedActions.setIsFetching(true));
    return getProductByNameFromDB(name).then(product =>
      dispatch(watchedActions.setWatchedProduct(product))
    );
  }
};

export default function watchedReducer(state = initialState, action) {
  switch (action.type) {
    case watchedActionTypes.SET_WATCHED_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case watchedActionTypes.SET_WATCHED_IS_FETCHED:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case watchedActionTypes.SET_WATCHED_FOUND_ITEMS:
      const newState = { ...state };
      const element = action.payload;
      newState.watchedItems.pushIfNotExist(element, e => callback(e, element));
      return {
        ...newState,
        isFetchingItems: false
      };
    default:
      return state;
  }
}

const callback = (e, element) =>
  e.productName === element.productName &&
  e.productBrand === element.productBrand;

Array.prototype.inArray = function (comparer) {
  for (var i = 0; i < this.length; i++) {
    if (comparer(this[i])) return true;
  }
  return false;
};

Array.prototype.pushIfNotExist = function (element, comparer) {
  if (!this.inArray(comparer)) {
    this.push(element);
  } else {
    alert('Already watching this item :)');
  }
};
