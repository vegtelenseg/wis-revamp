import React from 'react';
import PropType from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import Product from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    return this.renderMarkers(this.props.foundItems);
  }
  renderMarkers = foundItems =>
    foundItems.map((item, idx) => {
      const position = [item.lat, item.lng];
      return (
        <Marker key={idx + Math.random()} position={position}>
          <Popup>
            <div>
              <span>
                <strong>Name:</strong> {item.productName}
              </span>
              <span>
                <strong>Brand:</strong> {item.productBrand}
              </span>
              <span>
                <strong>In Stock:</strong> {item.inStock}
              </span>
              <span>
                <strong>Checkout Rate:</strong> {item.checkoutRate}
              </span>
            </div>
          </Popup>
        </Marker>
      );
    });
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
