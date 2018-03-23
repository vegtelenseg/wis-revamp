import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { productActions } from './product.reducer';
import {
  watchedActions,
  setAndUpdateWatchedItemsThunk
} from '../tabs/watched/watched.reducer';
import Product from './product.view';

const mapStateToProps = ({ productReducer, watchedReducer }) => ({
  ...productReducer,
  ...watchedReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...productActions,
      ...watchedActions,
      setAndUpdateWatchedItemsThunk
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
