import React from 'react';

import Map from '../../map/map.container';
import SearchView from '../../search/search.container';
import io from 'socket.io-client';
import serviceUrls from '../../../services/servicesUrls';

const socket = io.connect(serviceUrls.wistoreServer);

export default class ExploreView extends React.Component {

  constructor() {
    super();
    this.data = null;
  }
  componentDidMount() {
    socket.on('product changed', data => {
      console.log("Product changed: ", data);
      this.props.setChangedItem(data);
      this.data = data;
    });
  }
  render() {
    const { numberOfWatchedItems } = this.props;
    return (
      <div id="explore-tab">
        <SearchView activeTab="EXPLORE" />
        <Map numberOfWatchedItems={numberOfWatchedItems} changedData={this.data} />
      </div>
    );
  }
}
