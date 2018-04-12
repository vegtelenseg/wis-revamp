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
  componentWillReceiveProps(nextProps) {
    console.log("Will receive props: ", nextProps);
  }
  render() {
    const { item, buttonText, changedData } = this.props;
    console.log("Will receive props: ", changedData);
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
            <strong>In Stock:</strong> {changedData ? changedData.productQty : item.productQty}
          </span>
          <span className="popup-item">
            <strong>Price: </strong>R{changedData ? changedData.price : item.price}
          </span>
          <span className="popup-item">
            <strong>Checkout Rate:</strong> {changedData ? changedData.productCheckoutRate : item.productCheckoutRate}
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
