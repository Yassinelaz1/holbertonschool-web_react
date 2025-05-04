import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear } from '../utils/utils';

test('renders correct copyright text', () => {
  render(<Footer />);
  const year = getCurrentYear();
  expect(screen.getByText(`Copyright ${year} - Holberton School`)).toBeInTheDocument();
});
