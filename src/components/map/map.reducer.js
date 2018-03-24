import createAction from '../../helpers/actionCreator';

const initialState = {
  currentUserLocation: [0, 0],
  center: { lat: 0, lng: 0 },
  zoom: 11,
  markerInfo: []
};

const mapActionTypes = {
  SET_MAP_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  SET_MARKERS: 'SET_MARKERS'
};

export const mapActions = {
  setMapCurrentLocation: function(coords) {},
  setMapMarkers: markersInfo =>
    createAction(mapActionTypes.SET_MARKERS, markersInfo)
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
