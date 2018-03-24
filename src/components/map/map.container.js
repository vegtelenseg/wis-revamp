import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserCurrentLocationThunk } from './map.reducer';
import MapView from './map.view';

const mapStateToProps = ({ mapReducer, exploreReducer }) => ({
  ...mapReducer,
  foundItems: exploreReducer.foundItems
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
		getUserCurrentLocationThunk
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
