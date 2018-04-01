import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';

export default class Product extends React.Component {
  setWatchUnwatch = (item, buttonText) => {
    if (buttonText.length > 0) {
      if (buttonText.toLowerCase() === 'watch') {
        this.props.setAndUpdateWatchedItemsThunk(item);
      } else {
        this.props.setUnWatchedAndUpdateWatchedItemsThunk(item);
      }
    }
  };
  render() {
    const { item, buttonText } = this.props;
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
            onClick={() => this.setWatchUnwatch(item, buttonText)}
          />
        </div>
      </Popup>
    );
  }
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};
