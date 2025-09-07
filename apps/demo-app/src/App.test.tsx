import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ element }: { element: React.ReactNode }) => <div>{element}</div>,
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // The app should render without throwing an error
    expect(document.body).toBeInTheDocument();
  });
});
