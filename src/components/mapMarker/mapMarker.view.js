import React from 'react';
import PropType from 'prop-types';
import { Marker } from 'react-leaflet';
import InfoWindow from '../product/product.container';
import { setAndUpdateWatchedItemsThunk } from '../tabs/watched/watched.reducer';

export default class MapMarker extends React.Component {
  render() {
		const { foundItems } = this.props;
    return this.renderMarkers(foundItems);
  }
  renderMarkers = foundItems =>
    foundItems.map((item, idx) => {
			console.log("Mapping found items: ", item.isWatched)
      const position = [item.lat, item.lng];
      return (
        <Marker key={idx + Math.random()} position={position}>
          <InfoWindow
            item={item}
						setAndUpdateWatchedItemsThunk={setAndUpdateWatchedItemsThunk}
						buttonText={item.isWatched ? "unwatch" : "watch"}
          />
        </Marker>
      );
    });
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
