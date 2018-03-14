import createAction from '../../helpers/actionCreator';

const initialState = {
  currentUserLocation: [-26.065547, 28.046602],
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
  setMapMarkers: markersInfo => createAction(mapActionTypes.SET_MARKERS, markersInfo)
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
