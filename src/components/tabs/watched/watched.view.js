import React from 'react';

import SearchView from '../../search/search.container';

export default class WatchedView extends React.Component {
  render() {
    const {
      watchedItems,
      filteredWatchedItems,
      setUnWatchedAndUpdateWatchedItemsThunk,
      changedItem
    } = this.props;
    const {
      productBrand,
      productName,
      productCheckoutRate,
      price,
      productQty,
      productBestBefore
    } = { ...changedItem };
    const itemsToMap =
      filteredWatchedItems.length > 0 ? filteredWatchedItems : watchedItems;
    return (
      <div className="watched-tab-panel">
        <SearchView activeTab="WATCHED" />
        {itemsToMap.length > 0 ? (
          itemsToMap.map((watchedItem, idx) => (
            <div key={idx} className="watched-item-container">
              <ul className="watched-item">
                <li>
                  <strong>Name: </strong>
                  {productName || watchedItem.productName}
                </li>
                <li>
                  <strong>Brand: </strong>
                  {productBrand || watchedItem.productBrand}
                </li>
                <li>
                  <strong>In Stock: </strong>
                  {productQty || watchedItem.productQty}
                </li>
                <li>
                  <strong>Checkout Rate: </strong>
                  {productCheckoutRate || watchedItem.productCheckoutRate}
                </li>
                <li>
                  <strong>Best Before: </strong>
                  {productBestBefore || watchedItem.productBestBefore}
                </li>
              </ul>
              <input
                type="submit"
                value="unwatch"
                className="button"
                onClick={() =>
                  setUnWatchedAndUpdateWatchedItemsThunk(watchedItem)
                }
              />
              <div className="traffic-lights-container">
                <div className="traffic-lights">
                  <span className="traffic-light red" />
                  <span className="traffic-light yellow" />
                  <span className="traffic-light green" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Watched Items</div>
        )}
      </div>
    );
  }
}
