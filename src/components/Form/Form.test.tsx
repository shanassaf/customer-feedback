import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Form } from './Form';
import { Context } from '../../state/StoreProvider';

describe('Form', () => {
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
				<Form />
			</Context.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	test('component dispatches action on submit', () => {
		const { getByRole } = render(
			<Context.Provider value={{ dispatch, state }}>
				<Form />
			</Context.Provider>
		);
		const form = getByRole('button', { name: /submit/i });
		fireEvent.submit(form);
		expect(dispatch).toHaveBeenCalledTimes(1);
	});
});
