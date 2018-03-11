import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exploreActions } from './explore.reducer';
import ExploreView from './explore.view';

const mapStateToProps = ({ discountsReducer }) => ({
  ...discountsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...exploreActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ExploreView);
