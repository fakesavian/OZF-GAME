import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders splash screen with OZF Game title', () => {
  render(<App />);
  const ozfElement = screen.getByText(/ozf game/i);
  expect(ozfElement).toBeInTheDocument();

  const clickToEnter = screen.getByText(/click to enter/i);
  expect(clickToEnter).toBeInTheDocument();
});
