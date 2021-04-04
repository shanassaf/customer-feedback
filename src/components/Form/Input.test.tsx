import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
	const feedback = {
		name: '',
		email: '',
		comment: '',
		rating: '0',
	} as Feedback;
	const props = {
		setFeedback: jest.fn(),
		feedback,
		name: 'name',
		type: 'text',
	};
	test('component renders correctly', () => {
		const { asFragment } = render(<Input {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
	test('component calls setFeedback on change', () => {
		const { getByRole } = render(<Input {...props} />);
		const input = getByRole('textbox');
		fireEvent.change(input, { target: { value: 'checkout' } });
		expect(props.setFeedback).toHaveBeenCalledWith({ ...feedback, name: 'checkout' });
	});
});
