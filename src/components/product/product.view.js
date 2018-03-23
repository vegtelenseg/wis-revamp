import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';

const Product = ({ item, setAndUpdateWatchedItemsThunk }) => (
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
      <input
        type="submit"
        value="watch"
        className="watch"
        onClick={() => setAndUpdateWatchedItemsThunk(item)}
      />
    </div>
  </Popup>
);

export default Product;
Product.propTypes = {
  item: PropTypes.object.isRequired
};
