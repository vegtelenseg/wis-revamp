import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { exploreActions } from './explore.reducer';
import { productActions } from '../../product/product.reducer';
import ExploreView from './explore.view';

const mapStateToProps = ({ discountsReducer }) => ({
  ...discountsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...exploreActions,
      ...productActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ExploreView);
