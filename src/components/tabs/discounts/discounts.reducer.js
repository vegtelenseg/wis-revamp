import createAction from '../../../helpers/actionCreator';
import { getDiscountsByNameFromDB } from '../../../services/services';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  discounts: []
};

const discountsActionTypes = {
  SET_DISCOUNTS_ITEM_NAME: 'SET_DISCOUNTS_ITEM_NAME',
  SET_DISCOUNTS_IS_FETCHING: 'SET_DISCOUNTS_IS_FETCHING',
  SET_DISCOUNTS_FOUND_ITEMS: 'SET_DISCOUNTS_FOUND_ITEMS'
};

export const discountsActions = {
  setItemName: name => createAction(discountsActionTypes.SET_DISCOUNTS_ITEM_NAME, name),
  setIsFetching: predicate => createAction(discountsActionTypes.SET_DISCOUNTS_IS_FETCHING, predicate),
  setDiscounts: discounts => createAction(discountsActionTypes.SET_DISCOUNTS, discounts)
};

export const fetchDiscountsItemsThunk = (name, activeTab) => (dispatch, getState) => {
  if (!getState().isFetchingItems) {
    dispatch(discountsActions.setIsFetching(true));
    getDiscountsByNameFromDB(name).then(discounts =>
      dispatch(discountsActions.setDiscounts(discounts))
    );
  }
};

export default function discountsReducer(state = initialState, action) {
  switch (action.type) {
    case discountsActionTypes.SET_DISCOUNTS_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case discountsActionTypes.SET_DISCOUNTS_IS_FETCHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case discountsActionTypes.SET_DISCOUNTS_FOUND_ITEMS:
      return {
        ...state,
        discounts: action.payload
      };
    default:
      return state;
  }
}
