const initialState = {
  isVisible: false
};

const mapMarkerActionTypes = {
  SHOW_ITEM_INFO: 'SHOW_ITEM_INFO'
};

export const mapMarkerActions = {
  watchItem: function(item) {
    return;
  },
  showItemInfo: function(predicate) {
    return {
      type: mapMarkerActionTypes.SHOW_ITEM_INFO,
      payload: predicate
    };
  }
};

export default function mapMarkerReducer(state = initialState, action) {
  switch (action.type) {
    case mapMarkerActionTypes.SHOW_ITEM_INFO:
      return {
        ...state,
        isVisible: !action.payload
      };
    default:
      return state;
  }
}
