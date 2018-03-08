import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './mapMarker.reducer';
import MapMarker from './mapMarker.view';

const mapStateToProps = ({ mapReducer }) => ({
  ...mapReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...actions
  });

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
