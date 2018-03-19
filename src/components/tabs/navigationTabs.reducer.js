export const actionTypes = {
  NAVIGATE_TO: 'NAVIGATE_TO'
};

export const navigationTabsActions = {
  setActiveNavigationTabAction: function(actionType) {
    return (dispatch, getState) => {
      console.log('Dispatch: ', dispatch);
    };
  }
};

const initialState = {
  activeTabIndex: 0
};

export default function navigationTabsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO:
      return {
        ...state
      };
    default:
      return state;
  }
}
