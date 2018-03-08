const initialState = {
  currenUsertLocation: {
    lat: -26.107567,
    lng: 28.056702
  },
  center: { lat: -26.107567, lng: 28.056702 },
  zoom: 11
};

const actionTypes = {
  SET_MAP_CURRENT_LOCATION: 'SET_CURRENT_LOCATION'
};

export const actions = {
  setMapCurrentLocation: function(coords) {}
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MAP_CURRENT_LOCATION:
      return {
        ...state
      };
    default:
      return state;
  }
}
