import { combineReducers } from 'redux';
import searchReducer from './components/search/search.reducer';
import mapReducer from './components/map/map.reducer';

export default combineReducers({
  searchReducer,
  mapReducer
});
