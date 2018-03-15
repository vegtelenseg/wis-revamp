import React from 'react';
import PropType from 'prop-types';
import { Marker } from 'react-leaflet';
import InfoWindow from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    return this.renderMarkers(this.props.foundItems);
  }
  renderMarkers = foundItems =>
    foundItems.map((item, idx) => {
      const position = [item.lat, item.lng];
      return (
        <Marker key={idx + Math.random()} position={position}>
          <InfoWindow item={item} />
        </Marker>
      );
    });
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
