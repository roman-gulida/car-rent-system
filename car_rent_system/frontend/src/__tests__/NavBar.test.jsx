import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { AuthContext } from '../contexts/AuthContext'
import { vi } from 'vitest'

const renderNavbar = (value) => {
    render(
        <BrowserRouter>
            <AuthContext.Provider value={value}>
                <NavBar />
            </AuthContext.Provider>
    </BrowserRouter>
  );
};

test('shows Login/Register when logged out', () => {
  renderNavbar({ user: null, login: vi.fn(), logout: vi.fn() });
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('shows Profile/Logout when logged in', () => {
  renderNavbar({ user: {id: 1, name: "Test"}, login: vi.fn(), logout: vi.fn() });
  expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});
