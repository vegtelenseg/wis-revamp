import { getDiscountsByNameFromDB } from '../../../services/services';
import mockData from '../../../../public/mock-data/products.json';

import watchedReducer, { watchedActions } from './watched.reducer';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  watchedItems: []
};

describe('Watched Reducer Test Suite', () => {
  it('should set name of the item being searched', () => {
    const newState = watchedReducer(
      initialState,
      watchedActions.setItemName('bread')
    );
    expect(newState.searchQuery).toEqual('bread');
  });
  it('should set isFetching to true', () => {
    const newState = watchedReducer(
      initialState,
      watchedActions.setIsFetching(true)
    );
    expect(initialState.isFetchingItems).not.toBe(newState.isFetchingItems);
    expect(newState.isFetchingItems).toBeTruthy();
  });
  it('should set watched items', () => {
    const newState = watchedReducer(
      initialState,
      watchedActions.setWatchedProduct(mockData)
    );
    //expect(newState.watchedItems).not.toBe(initialState.watchedItems); Weirdness all the damn way
    expect(newState.watchedItems).toEqual(expect.arrayContaining(mockData));
  });
});
