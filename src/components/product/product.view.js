import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';

export default class Product extends React.Component {
  setWatchUnwatch = (item, buttonText) => {
    if (buttonText.length > 0) {
      if (buttonText.toLowerCase() === 'watch')
        this.props.setAndUpdateWatchedItemsThunk(item);
      else this.props.setUnWatchedAndUpdateWatchedItemsThunk(item);
    }
  };
  render() {
    const { item, buttonText, changedItem } = this.props;
    const {
      productBrand,
      productName,
      productCheckoutRate,
      price,
      productQty
    } = { ...changedItem };
    return (
      <Popup className="popup-container">
        <div className="popup">
          <span className="popup-item">
            <strong>Name:</strong> {productName || item.productName}
          </span>
          <span className="popup-item">
            <strong>Brand:</strong> {productBrand || item.productBrand}
          </span>
          <span className="popup-item">
            <strong>In Stock:</strong>
            {productQty || item.productQty}
          </span>
          <span className="popup-item">
            <strong>Price: </strong>R{price || item.price}
          </span>
          <span className="popup-item">
            <strong>Checkout Rate:</strong>
            {productCheckoutRate || item.productCheckoutRate}
          </span>
          <input
            type="submit"
            value={buttonText}
            className="watchBtn"
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
