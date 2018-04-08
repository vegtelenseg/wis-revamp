import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navigationTabsActions } from './navigationTabs.reducer';

import NavigationTabsView from './navigationTabs.view';

const mapStateToProps = ({ navigationTabsReducer }) => ({
  ...navigationTabsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...navigationTabsActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsView);
