import React from 'react';
import PropType from 'prop-types';

import Product from '../product/product.container';

export default class MapMarker extends React.Component {
  render() {
    return (
      <div>
        <div
          className="pin"
          onTouchStart={() => this.props.showItemInfo(this.props.isVisible)}
          onClick={() => this.props.showItemInfo(this.props.isVisible)}
        />
        <div className="pulse" />
        {this.props.item ? (
          <Product isVisible={this.props.isVisible} item={this.props.item} />
        ) : (
          <div>Render Nothing</div>
        )}
      </div>
    );
  }
}

MapMarker.propType = {
  item: PropType.object.isRequired
};
