import createAction from '../../helpers/actionCreator';

export const navigationTabsActionTypes = {
  NAVIGATE_TO: 'NAVIGATE_TO',
  SET_NUMBER_OF_WATCHED_ITEMS: 'SET_NUMBER_OF_WATCHED_ITEMS',
  SET_CHANGED_ITEM: 'SET_CHANGED_ITEM'
};

export const navigationTabsActions = {
  setNumberOfWatchedItems: numberOfWatchedItems =>
    createAction(
      navigationTabsActionTypes.SET_NUMBER_OF_WATCHED_ITEMS,
      numberOfWatchedItems
    ),
  setChangedItem: item =>
    createAction(navigationTabsActionTypes.SET_CHANGED_ITEM, item)
};

const initialState = {
  numberOfWatchedItems: 0,
  changedItem: null
};

export default function navigationTabsReducer(state = initialState, action) {
  switch (action.type) {
    case navigationTabsActionTypes.NAVIGATE_TO:
      return {
        ...state
      };
    case navigationTabsActionTypes.SET_NUMBER_OF_WATCHED_ITEMS:
      return {
        ...state,
        numberOfWatchedItems: action.payload
      };
    case navigationTabsActionTypes.SET_CHANGED_ITEM:
      return {
        ...state,
        changedItem: action.payload
      };
    default:
      return state;
  }
}
