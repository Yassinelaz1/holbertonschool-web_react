import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login message', () => {
  render(<Login />);
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test('renders email input and label', () => {
  render(<Login />);
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});

test('renders password input and label', () => {
  render(<Login />);
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
