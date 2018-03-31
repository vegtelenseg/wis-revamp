import createAction from '../../helpers/actionCreator';
const initialState = {
  isVisible: false,
  buttonText: 'watch'
};

const mapMarkerActionTypes = {
  SHOW_ITEM_INFO: 'SHOW_ITEM_INFO',
  SET_BUTTON_TEXT: 'SET_BUTTON_TEXT'
};

export const mapMarkerActions = {
  showItemInfo: predicate =>
    createAction(mapMarkerActionTypes.SHOW_ITEM_INFO, predicate)
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
