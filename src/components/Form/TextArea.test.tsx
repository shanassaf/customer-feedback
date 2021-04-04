import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
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
		const { asFragment } = render(<TextArea {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
	test('component calls setFeedback on change', () => {
		const { getByRole } = render(<TextArea {...props} />);
		const comment = getByRole('textbox');
		fireEvent.change(comment, { target: { value: 'This is amazing' } });
		expect(props.setFeedback).toHaveBeenCalledWith({
			...feedback,
			comment: 'This is amazing',
		});
	});
});
