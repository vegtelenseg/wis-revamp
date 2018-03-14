import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapActions } from './map.reducer';
import MapView from './map.view';

const mapStateToProps = ({ mapReducer, exploreReducer }) => ({
  ...mapReducer,
  foundItems: exploreReducer.foundItems
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...mapActions
  });

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
