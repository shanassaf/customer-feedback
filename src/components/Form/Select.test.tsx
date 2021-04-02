import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Select />);
		expect(asFragment()).toMatchSnapshot();
	});
});
