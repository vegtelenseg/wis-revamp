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

const mapActions = {
  setMapCurrentLocation: coords =>
		createAction(mapActionTypes.SET_MAP_CURRENT_LOCATION, coords),
  setMapMarkers: markersInfo =>
    createAction(mapActionTypes.SET_MARKERS, markersInfo)
};

export const getUserCurrentLocationThunk = () => dispatch => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				const coords = [position.coords.latitude, position.coords.longitude];
				dispatch(mapActions.setMapCurrentLocation(coords));
			});
		} else {
			alert("Please switch on the location service of your device");
		}
}

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case mapActionTypes.SET_MAP_CURRENT_LOCATION:
      return {
				...state,
				currentUserLocation: action.payload,
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
