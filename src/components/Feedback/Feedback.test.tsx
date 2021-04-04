import React from 'react';
import { render } from '@testing-library/react';
import { Feedback } from './Feedback';
import { Context } from '../../state/StoreProvider';

describe('Feedback', () => {
	const dispatch = jest.fn();
	const state = {
		feedback: [
			{
				name: 'name1',
				email: 'email1',
				comment: 'text1',
				rating: '1',
				uuid: 'uuid1',
			},
			{
				name: 'name2',
				email: 'email2',
				comment: 'text2',
				rating: '2',
				uuid: 'uuid2',
			},
		],
	} as State;
	test('component renders correctly', () => {
		const { asFragment } = render(
			<Context.Provider value={{ dispatch, state }}>
				<Feedback />
			</Context.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
