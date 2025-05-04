import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login inputs and labels', () => {
  render(<Login />);
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
