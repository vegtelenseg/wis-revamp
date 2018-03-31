import createAction from '../../helpers/actionCreator';

export const actionTypes = {
  NAVIGATE_TO: 'NAVIGATE_TO',
  SET_NUMBER_OF_WATCHED_ITEMS: 'SET_NUMBER_OF_WATCHED_ITEMS'
};

export const navigationTabsActions = {
  setNumberOfWatchedItems: numberOfWatchedItems =>
    createAction(actionTypes.SET_NUMBER_OF_WATCHED_ITEMS, numberOfWatchedItems)
};

const initialState = {
  numberOfWatchedItems: 0
};

export default function navigationTabsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO:
      return {
        ...state
      };
    case actionTypes.SET_NUMBER_OF_WATCHED_ITEMS:
      return {
        ...state,
        numberOfWatchedItems: action.payload
      };
    default:
      return state;
  }
}
