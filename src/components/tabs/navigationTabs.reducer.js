import createAction from '../../helpers/actionCreator';

export const actionTypes = {
  NAVIGATE_TO: 'NAVIGATE_TO',
  SET_NUMBER_OF_WATCHED_ITEMS: 'SET_NUMBER_OF_WATCHED_ITEMS'
};


export const navigationTabsActions = {
  setNumberOfWatchedItems: specifier => createAction(actionTypes.SET_NUMBER_OF_WATCHED_ITEMS, specifier)
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
        numberOfWatchedItems:
          action.payload === 'INC'
            ? ++state.numberOfWatchedItems
            : --state.numberOfWatchedItems
      };
    default:
      return state;
  }
}
