import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  watchedActions,
  setUnWatchedAndUpdateWatchedItemsThunk
} from './watched.reducer';
import WatchedView from './watched.view';

const mapStateToProps = ({ watchedReducer }) => ({
  ...watchedReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...watchedActions,
      setUnWatchedAndUpdateWatchedItemsThunk
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WatchedView);
