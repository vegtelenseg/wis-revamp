import { bindActionCreators } from 'redux';
import { actions } from './search.reducer';
import { connect } from 'react-redux';
import Search from './search.view';

const mapStateProps = ({ searchReducer }) => ({
  ...searchReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...actions
  });

export default connect(mapStateProps, mapDispatchToProps)(Search);
