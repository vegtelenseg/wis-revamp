import React from 'react';

import SearchView from '../../search/search.container';

export default class WatchedView extends React.Component {
  render() {
    const { watchedItems } = this.props;
    return (
      <div className="watched-tab-panel">
        <SearchView activeTab="WATCHED" />
        {watchedItems.length > 0 ? (
          watchedItems.map((watchedItem, idx) => (
            <div key={idx} className="watched-item-container">
              <ul className="watched-item">
                <li>
                  <strong>Name: </strong>
                  {watchedItem.productName}
                </li>
                <li>
                  <strong>Brand: </strong>
                  {watchedItem.productBrand}
                </li>
                <li>
                  <strong>In Stock: </strong>
                  {watchedItem.inStock}
                </li>
                <li>
                  <strong>Checkout Rate: </strong>
                  {watchedItem.checkoutRate}
                </li>
                <li>
                  <strong>Best Before: </strong>
                  {watchedItem.bestBefore}
                </li>
              </ul>
              <input
                type="submit"
                value="unwatch"
                className="button"
                onClick={() =>
                  this.props.setUnWatchedAndUpdateWatchedItemsThunk(watchedItem)
                }
              />
            </div>
          ))
        ) : (
          <div>No Watched Items</div>
        )}
      </div>
    );
  }
}
