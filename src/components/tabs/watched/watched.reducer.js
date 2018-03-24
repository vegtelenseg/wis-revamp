import createAction from '../../../helpers/actionCreator';
import { getProductByNameFromDB } from '../../../services/services';
import { navigationTabsActions } from '../navigationTabs.reducer';
const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  watchedItems: []
};

const watchedActionTypes = {
  SET_WATCHED_ITEM_NAME: 'SET_WATCHED_ITEM_NAME',
  SET_WATCHED_FOUND_ITEMS: 'SET_WATCHED_FOUND_ITEMS',
  SET_WATCHED_IS_FETCHED: 'SET_WATCHED_IS_FETCHED',
  SET_WATCHED_UNWATCH_ITEM: 'SET_WATCHED_UNWATCH_ITEM'
};

export const watchedActions = {
  setItemName: name =>
    createAction(watchedActionTypes.SET_WATCHED_ITEM_NAME, name),
  setWatchedProduct: product =>
    createAction(watchedActionTypes.SET_WATCHED_FOUND_ITEMS, product),
  setUnWatchProduct: product =>
    createAction(watchedActionTypes.SET_WATCHED_UNWATCH_ITEM, product),
  setIsFetching: predicate =>
    createAction(watchedActionTypes.SET_WATCHED_IS_FETCHED, predicate)
};

export const fetchWatchedItemsThunk = name => (
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

export const setAndUpdateWatchedItemsThunk = item => {
  return (dispatch, getState) => {
    const prevWatchedItems = getState().watchedReducer;
    dispatch(watchedActions.setWatchedProduct(item));
    const currentWatchedItems = getState().navigationTabsReducer;
    if (
      currentWatchedItems.numberOfWatchedItems <
      prevWatchedItems.watchedItems.length
    ) {
      dispatch(navigationTabsActions.setNumberOfWatchedItems('INC'));
    }
    return;
  };
};

export const setUnWatchedAndUpdateWatchedItemsThunk = item => {
  return dispatch => {
    dispatch(watchedActions.setUnWatchProduct(item));
    dispatch(navigationTabsActions.setNumberOfWatchedItems('DEC'));
    return;
  };
};

export default function watchedReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case watchedActionTypes.SET_WATCHED_ITEM_NAME:
      return (newState = {
        ...newState,
        searchQuery: action.payload
      });
    case watchedActionTypes.SET_WATCHED_IS_FETCHED:
      return (newState = {
        ...newState,
        isFetchingItems: action.payload
      });
    case watchedActionTypes.SET_WATCHED_FOUND_ITEMS:
      const element = action.payload;
      newState.watchedItems.pushIfNotExist(element, e => callback(e, element));
      return (newState = {
        ...newState,
        isFetchingItems: false
      });
    case watchedActionTypes.SET_WATCHED_UNWATCH_ITEM:
      const newPayload = newState.watchedItems.filter(
        item => item !== action.payload
      );
      return (newState = {
        ...newState,
        watchedItems: newPayload
      });
    default:
      return state;
  }
}

const callback = (e, element) =>
  e.productName === element.productName &&
  e.productBrand === element.productBrand;

Array.prototype.inArray = function(comparer) {
  for (var i = 0; i < this.length; i++) {
    if (comparer(this[i])) return true;
  }
  return false;
};

Array.prototype.pushIfNotExist = function(element, comparer) {
  if (!this.inArray(comparer)) {
    this.push(element);
  } else {
    alert('Already watching this item :)');
  }
};
