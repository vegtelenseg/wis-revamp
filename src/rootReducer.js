import { combineReducers } from 'redux';

import searchReducer from './components/search/search.reducer';
import mapReducer from './components/map/map.reducer';
import exploreReducer from './components/tabs/explore/explore.reducer';
import discountsReducer from './components/tabs/discounts/discounts.reducer';
import watchedReducer from './components/tabs/watched/watched.reducer';
import navigationTabsReducer from './components/tabs/navigationTabs.reducer';

export default combineReducers({
  searchReducer,
  mapReducer,
  exploreReducer,
  discountsReducer,
  watchedReducer,
  navigationTabsReducer
});
