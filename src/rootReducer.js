import { combineReducers } from 'redux';
import searchReducer from './components/search/search.reducer';
import mapReducer from './components/map/map.reducer';
import mapMarkerReducer from './components/mapMarker/mapMarker.reducer';

export default combineReducers({
  searchReducer,
	mapReducer,
	mapMarkerReducer
});
