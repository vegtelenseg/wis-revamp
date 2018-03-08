import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from './navigationTabs.reducer';

import NavigationTabs from './navigationTabs.view';

const mapStateToProps = ({ navigationTabsReducer }) => ({
  ...navigationTabsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...actions
  });

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabs);
