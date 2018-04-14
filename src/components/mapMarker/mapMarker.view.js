import React from 'react';
import PropType from 'prop-types';
import { Marker } from 'react-leaflet';
import InfoWindow from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    const { foundItems, numberOfWatchedItems, changedItem } = this.props;
    return this.renderMarkers(foundItems, numberOfWatchedItems, changedItem);
  }

  renderMarkers = (foundItems, numberOfWatchedItems, changedItem) =>
    foundItems.map((item, idx) => {
      const position = this.mutateLatLng(idx);
      /*const svgIcon = window.L.icon({
        iconUrl: require('../../assets/marker.svg'),
      })*/
      return (
        <Marker key={idx + Math.random()} position={position} autoPan>
          <InfoWindow
            item={
              changedItem && changedItem.productId === item.productId
                ? changedItem
                : item
            }
            buttonText={item.isWatched ? 'unwatch' : 'watch'}
            numberOfWatchedItems={numberOfWatchedItems}
            changedItem={changedItem}
          />
        </Marker>
      );
    });
  mutateLatLng = idx => {
    const { centerOfCircle } = this.props;
    const centerX = centerOfCircle[0];
    const centerY = centerOfCircle[1];
    const deltaXPow = Math.pow(centerX, 2);
    const deltaYPow = Math.pow(centerY, 2);
    const dist = Math.sqrt(deltaXPow + deltaYPow);
    const radius = dist / 4000;
    const x = centerX - radius * Math.cos(idx);
    const y = centerY - radius * Math.sin(idx);
    return [x, y];
  };
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
