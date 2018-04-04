import createAction from '../../helpers/actionCreator';

export const navigationTabsActionTypes = {
  NAVIGATE_TO: 'NAVIGATE_TO',
  SET_NUMBER_OF_WATCHED_ITEMS: 'SET_NUMBER_OF_WATCHED_ITEMS'
};

export const navigationTabsActions = {
  setNumberOfWatchedItems: numberOfWatchedItems =>
    createAction(
      navigationTabsActionTypes.SET_NUMBER_OF_WATCHED_ITEMS,
      numberOfWatchedItems
    )
};

const initialState = {
  numberOfWatchedItems: 0
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
    default:
      return state;
  }
}
