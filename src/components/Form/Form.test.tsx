import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Form />);
		expect(asFragment()).toMatchSnapshot();
	});
});
