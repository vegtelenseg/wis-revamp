import React from 'react';
import ReactDOM from 'react-dom';

import exploreReducer, {
  fetchExploreItemsThunk,
  exploreActions
} from './explore.reducer';
import mockData from '../../../../../public/mock-data/products.json';

describe('Explore Reducer Tests', () => {
  const initialState = {
    searchQuery: '',
    isFetchingItems: false,
    foundItems: []
  };

  it('should set the item name', () => {
    const newState = exploreReducer(
      initialState,
      exploreActions.setItemName('bread')
    );
    expect(newState.searchQuery).toEqual('bread');
  });

  it('should set isFetching to true', () => {
    const newState = exploreReducer(
      initialState,
      exploreActions.setIsFetching(true)
    );
    expect(newState.isFetchingItems).toEqual(true);
  });

  it('should set found items to be mock data', () => {
    const newState = exploreReducer(
      initialState,
      exploreActions.setFoundProduct(mockData)
    );
    expect(newState.foundItems).toBe(mockData);
  });
});
