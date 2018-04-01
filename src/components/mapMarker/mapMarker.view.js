import React from 'react';
import PropType from 'prop-types';
import { Marker } from 'react-leaflet';
import InfoWindow from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    const { foundItems, numberOfWatchedItems } = this.props;
    return this.renderMarkers(foundItems, numberOfWatchedItems);
  }
  renderMarkers = (foundItems, numberOfWatchedItems) =>
    foundItems.map((item, idx) => {
      const position = [item.lat, item.lng];
      return (
        <Marker key={idx + Math.random()} position={position}>
          <InfoWindow
            item={item}
            buttonText={item.isWatched ? 'unwatch' : 'watch'}
            numberOfWatchedItems={numberOfWatchedItems}
          />
        </Marker>
      );
    });
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
