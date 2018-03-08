const initialState = {
  item: {
    name: '',
    manufacturer: '',
    bestBefore: new Date(),
    checkoutRate: Math.floor(Math.random()),
    inStock: Math.ceil(Math.random())
  }
};

const actionTypes = {
  SET_ITEM_INFO: 'SET_ITEM_INFO'
};

export const actions = {
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
