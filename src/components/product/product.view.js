import React from 'react';

export default class Product extends React.Component {
  render() {
    return <div>{this.props.item.name}</div>;
  }
}
