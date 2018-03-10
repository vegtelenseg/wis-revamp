import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item, isVisible }) => {
  return (
    <div>
      <ul
        className={isVisible ? 'product-items-container show-item-info' : 'product-items-container'}
      >
        {renderItemDetails(item)}
      </ul>
    </div>
  );
};

const renderItemDetails = item =>
  Object.keys(item).map(itemKey => {
    return <li key={Math.random()}>{item[itemKey]}</li>;
  });

export default Product;
Product.propTypes = {
  item: PropTypes.object.isRequired
};
