import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Context } from '../../state/StoreProvider';

jest.mock('react-chartjs-2', () => ({
	Pie: () => <div>Pie Chart</div>,
}));

describe('App', () => {
	const dispatch = jest.fn();
	const state = {
		feedback: [
			{
				name: 'name',
				email: 'email',
				comment: 'text',
				rating: '1',
				uuid: 'uuid',
			},
		],
	} as State;
	test('component renders correctly', () => {
		const { asFragment } = render(
			<Context.Provider value={{ dispatch, state }}>
				<App />
			</Context.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
