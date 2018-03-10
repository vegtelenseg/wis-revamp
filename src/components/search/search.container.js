import { bindActionCreators } from 'redux';
import { searchActions, fetchItemsThunk } from './search.reducer';
import { connect } from 'react-redux';
import Search from './search.view';

const mapStateProps = ({ searchReducer }) => ({
  ...searchReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...searchActions,
      fetchItemsThunk
    },
    dispatch
  );

export default connect(mapStateProps, mapDispatchToProps)(Search);
