import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with Header, Login, Footer and Notifications', () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
});
