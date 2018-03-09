const initialState = {
  currenUsertLocation: {
    lat: -26.065547,
    lng: 28.046602
  },
  center: { lat: -26.107567, lng: 28.056702 },
  zoom: 11,
  markerInfo: []
};

const mapActionTypes = {
  SET_MAP_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  SET_MARKERS: 'SET_MARKERS'
};

export const mapActions = {
  setMapCurrentLocation: function(coords) {},
  setMapMarkers: function(markersInfo) {
    return {
      type: mapActionTypes.SET_MARKERS,
      payload: markersInfo
    };
  }
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case mapActionTypes.SET_MAP_CURRENT_LOCATION:
      return {
        ...state
      };
    case mapActionTypes.SET_MARKERS:
      return {
        ...state,
        markerInfo: action.payload
      };
    default:
      return state;
  }
}
