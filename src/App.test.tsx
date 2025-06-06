import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
