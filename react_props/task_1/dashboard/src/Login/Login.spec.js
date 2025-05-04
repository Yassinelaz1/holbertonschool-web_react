import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('renders login form with 2 labels, 2 inputs, and 1 button', () => {
  render(<Login />);
  expect(screen.getAllByLabelText(/email|password/i).length).toBe(2);
  expect(screen.getAllByRole('textbox').length).toBe(1);
  expect(screen.getAllByLabelText(/password/i).length).toBe(1);
  expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
});

test('focuses input when label is clicked', async () => {
  render(<Login />);
  const emailLabel = screen.getByLabelText(/email/i);
  userEvent.click(emailLabel);
  expect(emailLabel).toHaveFocus();
});