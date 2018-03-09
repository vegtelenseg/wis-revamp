const initialState = {
  product: {}
};

const actionTypes = {
  SET_ITEM_INFO: 'SET_ITEM_INFO'
};

export const mapMarkerActions = {
  watchItem: function(item) {
    return;
  }
};

export default function mapMarkerReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ITEM_INFO:
      return {
        ...state
      };

    default:
      return state;
  }
}
