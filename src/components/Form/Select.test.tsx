import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
	const feedback = {
		name: '',
		email: '',
		comment: '',
		rating: '0',
	} as Feedback;
	const props = {
		setFeedback: jest.fn(),
		feedback,
	};
	test('component renders correctly', () => {
		const { asFragment } = render(<Select {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
	test('component calls setComment on change', () => {
		const { getByRole } = render(<Select {...props} />);
		const select = getByRole('combobox');
		fireEvent.change(select, { target: { value: '3' } });
		expect(props.setFeedback).toHaveBeenCalledWith({ ...feedback, rating: '3' });
	});
});
