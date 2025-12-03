import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('renders NavigationBar and Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThanOrEqual(4);

    const homeHeading = screen.getByText(/welcome to the academic web application/i);
    expect(homeHeading).toBeInTheDocument();
  });

  test('renders Courses page when navigating to /courses', () => {
    render(
      <MemoryRouter initialEntries={['/courses']}>
        <App />
      </MemoryRouter>
    );

    const header = screen.getByText(/available courses/i);
    expect(header).toBeInTheDocument();
  });
});
