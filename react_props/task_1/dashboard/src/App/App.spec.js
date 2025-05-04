import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with Header component', () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test('renders App with Login component', () => {
  render(<App />);
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test('renders App with Footer component', () => {
  render(<App />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});

test('renders App with Notifications component', () => {
  render(<App />);
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
});