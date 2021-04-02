import React from 'react';
import { render } from '@testing-library/react';
import Reducer from './Reducer';

describe('Reducer', () => {
	const initialState = {
		comments: [
			{
				name: 'Shannon',
				email: 'shannon@shan.shan',
				text: 'I am Shannon',
				rating: '1',
			},
		],
	} as State;

	const comment = {
		name: 'Checkout',
		email: 'checkout@check.out',
		text: 'I am Checkout',
		rating: '5',
	} as Comment;

	const newState = {
		comments: [
			{
				name: 'Shannon',
				email: 'shannon@shan.shan',
				text: 'I am Shannon',
				rating: '1',
			},
			{
				name: 'Checkout',
				email: 'checkout@check.out',
				text: 'I am Checkout',
				rating: '5',
			},
		],
	};
	test('returns original state with unknown action type', () => {
		const action = { type: 'UNKNOWN_TYPE', comment };
		const result = Reducer(initialState, action);
		expect(result).toEqual(initialState);
	});

	test('returns new state with ADD_COMMENT action type', () => {
		const action = { type: 'ADD_COMMENT', comment };
		const result = Reducer(initialState, action);
		expect(result).toEqual(newState);
	});
});
