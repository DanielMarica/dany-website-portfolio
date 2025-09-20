import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import './styles/global.css';

/**
 * App Component
 *
 * This is the main layout component for the portfolio application. It provides the basic structure
 * that wraps all pages, including:
 * - A header with personal branding
 * - A navigation bar
 * - The main content area (rendered via Outlet from react-router)
 * - Page navigation buttons (fixed position)
 *
 * The layout uses a flex structure for responsive design.
 *
 * @return {JSX.Element} The main application layout structure
 */
const App: React.FC = () => {
  return (
    <div className="app">
      {/* Header component with personal branding */}
      <Header />
      
      {/* Navigation component */}
      <Navigation />
      
      {/* Main content area - rendered by React Router based on current route */}
      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
};

export default App;
