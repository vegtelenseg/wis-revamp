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
    const { item, buttonText } = this.props;
    return (
      <Popup className="popup-container">
        <div className="popup">
          <span className="popup-item">
            <strong>Name:</strong> {item.productName}
          </span>
          <span className="popup-item">
            <strong>Brand:</strong> {item.productBrand}
          </span>
          <span className="popup-item">
            <strong>In Stock:</strong>
            {item.productQty}
          </span>
          <span className="popup-item">
            <strong>Price: </strong>R{item.price}
          </span>
          <span className="popup-item">
            <strong>Checkout Rate:</strong>
            {item.productCheckoutRate}
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
