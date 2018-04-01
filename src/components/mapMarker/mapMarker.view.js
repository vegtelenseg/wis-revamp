import React from 'react';
import PropType from 'prop-types';
import { Marker } from 'react-leaflet';
import InfoWindow from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    const { foundItems, numberOfWatchedItems } = this.props;
    return this.renderMarkers(foundItems, numberOfWatchedItems);
  }
  mutateLatLng = () => {
    const { centerOfCircle } = this.props;
    const x = centerOfCircle[0];
    const y = centerOfCircle[1];
    const offSet = Math.random() / 220;
    return [x + offSet / Math.random(), y + offSet / Math.random()];
  };
  renderMarkers = (foundItems, numberOfWatchedItems) =>
    foundItems.map((item, idx) => {
      const position = this.mutateLatLng();
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
