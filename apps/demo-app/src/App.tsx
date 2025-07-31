import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { AnimationPage } from './pages/AnimationPage';
import { DashboardPage } from './pages/DashboardPage';
import { DemosPage } from './pages/DemosPage';
import { DesignSystemShowcase } from './pages/DesignSystemPage';
import EcommercePage from './pages/EcommercePage';
import { HomePage } from './pages/HomePage';
import { MarketingPage } from './pages/MarketingPage';
import { SettingsPage } from './pages/SettingsPage';
import { UsersPage } from './pages/UsersPage';

function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="*" element={
            <Layout isDark={isDark} toggleTheme={toggleTheme}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/demos" element={<DemosPage />} />
                <Route path="/design-system" element={<DesignSystemShowcase />} />
                <Route path="/animations" element={<AnimationPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
