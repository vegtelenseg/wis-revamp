import React from 'react';
import PropType from 'prop-types';

import Product from '../product/product.container';

export default class MapMarker extends React.Component {
  openItemDetails = e => {
    alert('Hey');
  };
  render() {
    return (
      <div>
        <div className="pin" />
        <div className="pulse" />
        {this.props.item ? <Product item={this.props.item} /> : <div>Render Nothing</div>}
      </div>
    );
  }
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
