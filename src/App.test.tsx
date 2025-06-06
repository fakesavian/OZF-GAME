import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

test('renders boot sequence first line', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const line = await screen.findByText(/INITIATING OZF SYSTEM/i);
  expect(line).toBeInTheDocument();
});

test('navigates to settings screen', () => {
  render(
    <MemoryRouter initialEntries={['/settings']}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByText(/Settings/i);
  expect(heading).toBeInTheDocument();
});

test('menu settings button shows settings screen', async () => {
  render(
    <MemoryRouter initialEntries={['/menu']}>
      <App />
    </MemoryRouter>
  );

  await userEvent.click(screen.getByText('▶ Settings'));
  const heading = await screen.findByText(/Settings/i);
  expect(heading).toBeInTheDocument();
});
