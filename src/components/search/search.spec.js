import React from 'react';
import ReactDOM from 'react-dom';

import Search from './search.container';
import searchReducer, { fetchItemsThunk, searchActions } from './search.reducer';
import mockData from '../../../public/mock-data/products.json';
import searchContainer from './search.container';

describe('Search Reducer Tests', () => {
	const initialState = {
		searchQuery: '',
		isFetchingItems: false,
		foundItems: []
	};

	it('should set the item name', () => {
		const newState = searchReducer(initialState, searchActions.setItemName('bread'));
		expect(newState.searchQuery).toEqual('bread');
	});

	it('should set isFetching to true', () => {
		const newState = searchReducer(initialState, searchActions.isFetching(true));
		expect(newState.isFetchingItems).toEqual(true)
	});

	it('should set found items to be mock data', () => {
		const newState = searchReducer(initialState, searchActions.foundProduct(mockData));
		expect(newState.foundItems).toBe(mockData);
	});

	/*it('should fetch items asynchronously', () => {
		const newState = fetchItemsThunk('bread').call();
		console.log("Ne st: ", newState)
		expect(initialState).toEqual(newState);
	});*/
});