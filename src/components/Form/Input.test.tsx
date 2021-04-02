import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Input />);
		expect(asFragment()).toMatchSnapshot();
	});
});
