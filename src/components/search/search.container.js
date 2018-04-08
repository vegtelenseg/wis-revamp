import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchActions, fetchItemsThunk } from './search.reducer';
import { fetchExploreItemsThunk } from '../tabs/explore/explore.reducer';
import { fetchWatchedItemsThunk } from '../tabs/watched/watched.reducer';
import { fetchDiscountsItemsThunk } from '../tabs/discounts/discounts.reducer';

import SearchView from './search.view';

const mapStateProps = ({ searchReducer }) => ({
  ...searchReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...searchActions,
      fetchItemsThunk,
      fetchExploreItemsThunk,
      fetchWatchedItemsThunk,
      fetchDiscountsItemsThunk
    },
    dispatch
  );

export default connect(mapStateProps, mapDispatchToProps)(SearchView);
