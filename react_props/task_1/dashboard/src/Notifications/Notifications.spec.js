import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders without crashing', () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  test('renders list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThanOrEqual(1);
  });

  test('renders the correct text for first notification item', () => {
    render(<Notifications />);
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
  });

  test('renders a close button and logs message on click', () => {
    console.log = jest.fn(); // mock console.log
    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    closeButton.click();
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
