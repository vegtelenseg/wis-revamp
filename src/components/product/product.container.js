import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { productActions } from './product.reducer';
import {
  watchedActions,
  setAndUpdateWatchedItemsThunk,
  setUnWatchedAndUpdateWatchedItemsThunk
} from '../tabs/watched/watched.reducer';
import Product from './product.view';

const mapStateToProps = ({
  productReducer,
  watchedReducer,
  navigationTabsReducer
}) => ({
  ...productReducer,
  ...watchedReducer,
  ...navigationTabsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...productActions,
      ...watchedActions,
      setAndUpdateWatchedItemsThunk,
      setUnWatchedAndUpdateWatchedItemsThunk
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
