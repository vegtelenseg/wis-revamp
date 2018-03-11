import createAction from '../../helpers/actionCreator';
import { getProductByNameFromDB, getProductByNameFromList } from '../../services/services';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  foundItems: []
};

const searchActionTypes = {
  SET_ITEM_NAME: 'SET_ITEM_NAME',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
  SET_FOUND_ITEMS: 'SET_FOUND_ITEMS',
  SET_WATCHED_PRODUCTS: 'SET_WATCHED_PRODUCTS',
  SET_DISCOUNTS: 'SET_DISCOUNTS'
};

export const searchActions = {
  setItemName: name => createAction(searchActionTypes.SET_ITEM_NAME, name),
  setIsFetching: predicate => createAction(searchActionTypes.SET_IS_FETCHING, predicate),
  setFoundProduct: product => createAction(searchActionTypes.SET_FOUND_ITEMS, product),
  setWatchedProducts: products => createAction(searchActionTypes.SET_WATCHED_PRODUCTS, products),
  setDiscounts: discounts => createAction(searchActionTypes.SET_DISCOUNTS, discounts)
};

export const fetchItemsThunk = (name, activeTab) => (dispatch, getState) => {
  if (!getState().isFetchingItems) {
    dispatch(searchActions.isFetching(true));
    switch (activeTab) {
      case 'EXPLORE':
        return getProductByNameFromDB(name).then(product =>
          dispatch(searchActions.setFoundProduct(product))
        );
      case 'WATCHED':
        return getProductByNameFromList(name).then(product =>
          dispatch(searchActions.setWatchedProducts(product))
        );
      case 'DISCOUNTS':
        return getDiscountsByNameFromDB(name).then(discounts =>
          dispatch(searchActions.setDiscounts(discounts))
        );
      case 'IMPROVEMENTS':
        break;
      default:
        break;
    }
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case searchActionTypes.SET_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case searchActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    case searchActionTypes.SET_FOUND_ITEMS:
      return {
        ...state,
        foundItems: action.payload,
        isFetchingItems: false
			};
		case searchActionTypes.SET_WATCHED_PRODUCTS:
			return {
				...state,
				watchedProducts: action.payload
			}
			case searchActionTypes.SET_DISCOUNTS:
				return {
					...state,
					discounts: action.payload
				}
    default:
      return state;
  }
}
