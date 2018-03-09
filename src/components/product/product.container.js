import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { productActions } from './product.reducer';
import Product from './product.view';

const mapStateToProps = ({ productReducer }) => ({
  ...productReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...productActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
