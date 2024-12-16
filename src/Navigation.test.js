import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders navigation with Home link', () => {
  render(<Navigation />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});
