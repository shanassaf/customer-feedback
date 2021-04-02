import React from 'react';
import { render } from '@testing-library/react';
import { Comments } from './Comments';

describe('Comments', () => {
	test('component renders correctly', () => {
		const { asFragment } = render(<Comments />);
		expect(asFragment()).toMatchSnapshot();
	});
});
