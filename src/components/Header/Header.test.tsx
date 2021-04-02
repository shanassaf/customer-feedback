import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Header />);
		expect(asFragment()).toMatchSnapshot();
	});
});
