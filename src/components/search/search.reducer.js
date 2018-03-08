const initialState = {
  searchQuery: 'Bread',
  isFetchingProducts: false
};

const actionTypes = {
  SEARCH_PRODUCT: 'SEARCH_PRODUCT'
};

export const actions = {};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        isFetchingProducts: true
      };
    default:
      return state;
  }
}
