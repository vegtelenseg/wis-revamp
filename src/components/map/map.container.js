import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './map.reducer';
import Map from './map.view';

const mapStateToProps = ({ mapReducer }) => ({
  ...mapReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...actions
  });

export default connect(mapStateToProps, mapDispatchToProps)(Map);
