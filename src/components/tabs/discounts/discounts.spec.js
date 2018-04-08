import { getDiscountsByNameFromDB } from '../../../services/services';
import mockData from '../../../../public/mock-data/products.json';

import discountsReducer, { discountsActions } from './discounts.reducer';

const initialState = {
  searchQuery: '',
  isFetchingItems: false,
  discounts: []
};

describe('Discounts Reducer Test Suite', () => {
  it('should set name of the item being searched', () => {
    const newState = discountsReducer(
      initialState,
      discountsActions.setItemName('bread')
    );
    expect(newState.searchQuery).toEqual('bread');
  });
  it('should set isFetching to true', () => {
    const newState = discountsReducer(
      initialState,
      discountsActions.setIsFetching(true)
    );
    expect(initialState.isFetchingItems).not.toBe(newState.isFetchingItems);
    expect(newState.isFetchingItems).toBeTruthy();
  });
  it('should set discounts', () => {
    new Promise((resolve, reject) => {
      discountsReducer(initialState, discountsActions.setDiscounts(mockData));
    })
      .then(newState => {
        expect(initialState.discounts).not.toBe(newState.discounts);
        expect(newState.discounts).toEqual(expect.arrayContaining(mockData));
        resolve(newState);
      })
      .catch(err => console.error('Could not set the discounts.'));
  });
});
