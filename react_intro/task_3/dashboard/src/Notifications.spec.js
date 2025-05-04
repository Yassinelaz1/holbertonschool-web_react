import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  test('logs to console when close button is clicked', () => {
    console.log = jest.fn(); // Mock console.log
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
