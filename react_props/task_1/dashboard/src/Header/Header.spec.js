import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with logo', () => {
  render(<Header />);
  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
});

test('renders header with title', () => {
  render(<Header />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});