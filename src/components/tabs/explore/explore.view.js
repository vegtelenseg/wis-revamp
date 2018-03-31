import React from 'react';

import Map from '../../map/map.container';
import SearchView from '../../search/search.container';

export default class ExploreView extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('ExploreView - Component Will Receive Props: ', nextProps);
  }
  render() {
    return (
      <div id="explore-tab">
        <SearchView activeTab="EXPLORE" />
        <Map />
      </div>
    );
  }
}
