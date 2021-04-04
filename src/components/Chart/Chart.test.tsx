import React from 'react';
import { render } from '@testing-library/react';
import { Chart } from './Chart';
import { Context } from '../../state/StoreProvider';

jest.mock('react-chartjs-2', () => ({
	Pie: () => <div>Pie Chart</div>,
}));

describe('Chart', () => {
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
			<Context.Provider value={{ dispatch: () => {}, state }}>
				<Chart />
			</Context.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
	test('component does not render if no feedback has been provided', () => {
		const { asFragment } = render(
			<Context.Provider value={{ dispatch: () => {}, state: { feedback: [] } }}>
				<Chart />
			</Context.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
