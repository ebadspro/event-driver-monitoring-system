import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

describe('NavigationBar', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    const links = ['Home', 'Courses', 'Students', 'Services'];
    links.forEach((linkText) => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href');
    });
  });

  test('active link has active styling', () => {
    render(
      <MemoryRouter initialEntries={['/students']}>
        <NavigationBar />
      </MemoryRouter>
    );

    const activeLink = screen.getByText('Students');
    // The active link should have a style that differs from non-active links
    expect(activeLink.closest('a')).toHaveStyle('background-color: #0056b3');
  });
});
