import { combineReducers } from 'redux';

import searchReducer from './components/search/search.reducer';
import mapReducer from './components/map/map.reducer';
import mapMarkerReducer from './components/mapMarker/mapMarker.reducer';
import exploreReducer from './components/tabs/explore/explore.reducer';
import discountsReducer from './components/tabs/discounts/discounts.reducer';
import watchedReducer from './components/tabs/watched/watched.reducer';

export default combineReducers({
  searchReducer,
  mapReducer,
  mapMarkerReducer,
  exploreReducer,
  discountsReducer,
  watchedReducer
});
