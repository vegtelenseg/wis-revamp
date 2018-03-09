import React from 'react';

import Product from '../product/product.container';

export default class MapMarker extends React.Component {
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
