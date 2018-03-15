import React from 'react';
import ReactDOM from 'react-dom';

import searchReducer, {
  fetchItemsThunk,
  searchActions
} from './search.reducer';
import mockData from '../../../public/mock-data/products.json';

describe('Search Reducer Tests', () => {
  const initialState = {
    searchQuery: '',
    isFetchingItems: false,
    foundItems: []
  };

  it('should set the item name', () => {
    const newState = searchReducer(
      initialState,
      searchActions.setItemName('bread')
    );
    expect(newState.searchQuery).toEqual('bread');
  });

  it('should set isFetching to true', () => {
    const newState = searchReducer(
      initialState,
      searchActions.setIsFetching(true)
    );
    expect(newState.isFetchingItems).toEqual(true);
  });
});
