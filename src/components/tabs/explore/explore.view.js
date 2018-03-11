import React from 'react';

import Map from '../../map/map.container';
import Search from '../../search/search.container';

export default class ExploreView extends React.Component {
  render() {
    return (
      <div>
        <Search activeTab="EXPLORE" />
        <Map />
      </div>
    );
  }
}
