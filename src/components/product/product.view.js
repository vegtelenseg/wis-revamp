import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';

export default class Product extends React.Component {
  render() {
    const { item, setAndUpdateWatchedItemsThunk, buttonText } = this.props;
    return (
      <Popup className="popup">
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
          <input
            type="submit"
            value={buttonText}
            className="watch"
            onClick={() => setAndUpdateWatchedItemsThunk(item)}
          />
        </div>
      </Popup>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};
