import createAction from '../../helpers/actionCreator';

const initialState = {
  searchQuery: '',
  isFetchingItems: false
};

const searchActionTypes = {
  SET_SEARCH_ITEM_NAME: 'SET_SEARCH_ITEM_NAME',
  SET_SEARCH_IS_FECTHING: 'SET_SEARCH_IS_FECTHING'
};

export const searchActions = {
  setItemName: name =>
    createAction(searchActionTypes.SET_SEARCH_ITEM_NAME, name),
  setIsFetching: predicate =>
    createAction(searchActionTypes.SET_SEARCH_IS_FECTHING, predicate)
};

export const fetchItemsThunk = (name, props) => (dispatch, getState) => {
  if (!getState().isFetchingItems) {
    dispatch(searchActions.setIsFetching(true));
    switch (props.activeTab) {
      case 'EXPLORE':
        return props.fetchExploreItemsThunk(name);
      case 'WATCHED':
        return props.fetchWatchedItemsThunk(name);
      case 'DISCOUNTS':
        return props.fetchDiscountsItemsThunk(name);
      default:
        break;
    }
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case searchActionTypes.SET_SEARCH_ITEM_NAME:
      return {
        ...state,
        searchQuery: action.payload
      };
    case searchActionTypes.SET_SEARCH_IS_FECTHING:
      return {
        ...state,
        isFetchingItems: action.payload
      };
    default:
      return state;
  }
}
