import React from 'react';
import { render } from '@testing-library/react'
import App from './component';

describe('App', () => {
  test('component renders correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
})