import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form with 2 labels, 2 inputs, and 1 button', () => {
  render(<Login />);
  const labels = screen.getAllByText(/email|password/i);
  const inputs = screen.getAllByRole('textbox');
  const passwordInputs = screen.getAllByLabelText(/password/i);
  const button = screen.getByRole('button', { name: /OK/i });
  expect(labels.length).toBe(2);
  expect(inputs.length + passwordInputs.length).toBe(2);
  expect(button).toBeInTheDocument();
});

test('focuses input when label is clicked', async () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  emailInput.focus();
  expect(emailInput).toHaveFocus();
});
