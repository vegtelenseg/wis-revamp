import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { discountsActions } from './discounts.reducer';
import DiscountsView from './discounts.view';

const mapStateToProps = ({ discountsReducer }) => ({
  ...discountsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...discountsActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsView);
