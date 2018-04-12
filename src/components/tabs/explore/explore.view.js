import React from 'react';

import Map from '../../map/map.container';
import SearchView from '../../search/search.container';

export default class ExploreView extends React.Component {
  render() {
    const { numberOfWatchedItems, changedItem } = this.props;
    return (
      <div id="explore-tab">
        <SearchView activeTab="EXPLORE" />
        <Map
          numberOfWatchedItems={numberOfWatchedItems}
          changedItem={changedItem}
        />
      </div>
    );
  }
}
