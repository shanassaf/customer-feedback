import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
	});
});
