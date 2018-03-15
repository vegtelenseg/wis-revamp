import React from 'react';

import Search from '../../search/search.container';

export default class WatchedView extends React.Component {
  render() {
    const { watchedItems } = this.props;
    return (
      <div>
        <Search activeTab="WATCHED" />
        {watchedItems.map((watchedItem, idx) => (
          <div key={idx}>
            <ul>
              <li>{watchedItem.productName}</li>
              <li>{watchedItem.productBrand}</li>
              <li>{watchedItem.inStock}</li>
              <li>{watchedItem.checkoutRate}</li>
              <li>{watchedItem.bestBefore}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
