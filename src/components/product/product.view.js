import React from 'react';
import map from 'lodash';

export default class Product extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <ul>{this.renderItemDetails(item)}</ul>
      </div>
    );
  }
  renderItemDetails = item =>
		Object.keys(item).map(itemKey => {
      return <li key={Math.random()}>{item[itemKey]}</li>;
    });
}
