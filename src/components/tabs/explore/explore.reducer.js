import createAction from '../../../helpers/actionCreator';
import { getProductByNameFromDB } from '../../../services/services';
import { findIndex } from 'lodash';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  foundItems: []
};

const exploreActionTypes = {
  SET_EXPLORE_ITEM_NAME: 'SET_EXPLORE_ITEM_NAME',
  SET_EXPLORE_IS_FETCHING: 'SET_EXPLORE_IS_FETCHING',
  SET_EXPLORE_FOUND_ITEMS: 'SET_EXPLORE_FOUND_ITEMS',
  SET_CHANGED_ITEM: 'SET_CHANGED_ITEM'
};

export const exploreActions = {
  setItemName: name =>
    createAction(exploreActionTypes.SET_EXPLORE_ITEM_NAME, name),
  setIsFetching: predicate =>
    createAction(exploreActionTypes.SET_EXPLORE_IS_FETCHING, predicate),
  setFoundProduct: product =>
    createAction(exploreActionTypes.SET_EXPLORE_FOUND_ITEMS, product),
  setChangedItem: item => createAction(exploreActionTypes.SET_CHANGED_ITEM, item)

};

export const fetchExploreItemsThunk = name => (dispatch, getState) => {
  console.log('Search name: ', name);
  if (!getState().isFetchingItems) {
    dispatch(exploreActions.setIsFetching(true));
    return getProductByNameFromDB(name).then(product =>
      dispatch(exploreActions.setFoundProduct(product))
    );
  }
};

export default function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case exploreActionTypes.SET_EXPLORE_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case exploreActionTypes.SET_EXPLORE_IS_FETCHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case exploreActionTypes.SET_EXPLORE_FOUND_ITEMS:
      return {
        ...state,
        foundItems: action.payload,
        isFetchingItems: false
      };
    case exploreActionTypes.SET_CHANGED_ITEM:
      const { foundItems } = state;
      const idx = findIndex(foundItems, { productId: action.payload.productId });
      if (idx !== -1) {
        foundItems[idx] = action.payload;
      }
      return {
        ...state,
        foundItems
      }
    default:
      return state;
  }
}
