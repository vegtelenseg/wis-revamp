import { bindActionCreators } from 'redux';
import { searchActions } from './search.reducer';
import { connect } from 'react-redux';
import Search from './search.view';

const mapStateProps = ({ searchReducer }) => ({
  ...searchReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...searchActions
    },
    dispatch
  );

export default connect(mapStateProps, mapDispatchToProps)(Search);
