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
      productId,
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
                  {productId === watchedItem.productId
                    ? productName
                    : watchedItem.productName}
                </li>
                <li>
                  <strong>Brand: </strong>
                  {productId === watchedItem.productId
                    ? productBrand
                    : watchedItem.productBrand}
                </li>
                <li>
                  <strong>In Stock: </strong>
                  {productId === watchedItem.productId
                    ? productQty
                    : watchedItem.productQty}
                </li>
                <li>
                  <strong>Price: </strong>
                  {productId === watchedItem.productId
                    ? price
                    : watchedItem.price}
                </li>
                <li>
                  <strong>Checkout Rate: </strong>
                  {productId === watchedItem.productId
                    ? productCheckoutRate
                    : watchedItem.productCheckoutRate}
                </li>
                <li>
                  <strong>Best Before: </strong>
                  {productId === watchedItem.productId
                    ? productBestBefore
                    : watchedItem.productBestBefore}
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
          <div className="no-watched">No Watched Items</div>
        )}
      </div>
    );
  }
}
