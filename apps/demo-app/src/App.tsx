import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
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

function AppContent() {
  const { isDark, toggleTheme } = useTheme();

  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? '/tailwind-demo' : '';

  return (
    <ErrorBoundary>
      <Router basename={basename}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route
            path="*"
            element={
              <Layout isDark={isDark} toggleTheme={toggleTheme}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/demos" element={<DemosPage />} />
                  <Route path="/design-system" element={<DesignSystemShowcase />} />
                  <Route path="/animations" element={<AnimationPage />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
