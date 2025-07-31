import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-319249408', {
        page_path: location.pathname + location.hash,
        page_title: getPageTitle(location.pathname + location.hash),
      });
    }
  }, [location]);

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackComponentInteraction = (componentName: string, action: string) => {
    trackEvent(action, 'component_interaction', componentName);
  };

  const trackAnimationInteraction = (animationType: string, action: string) => {
    trackEvent(action, 'animation_interaction', animationType);
  };

  const trackDemoInteraction = (demoName: string, action: string) => {
    trackEvent(action, 'demo_interaction', demoName);
  };

  return {
    trackEvent,
    trackComponentInteraction,
    trackAnimationInteraction,
    trackDemoInteraction,
  };
};

const getPageTitle = (path: string): string => {
  const titles: Record<string, string> = {
    '/': 'TailwindSpark - Home',
    '/#/': 'TailwindSpark - Home',
    '/#/design-system': 'TailwindSpark - Design System',
    '/#/animations': 'TailwindSpark - Animation Showcase',
    '/#/dashboard': 'TailwindSpark - SaaS Dashboard',
    '/#/ecommerce': 'TailwindSpark - E-commerce Demo',
    '/#/marketing': 'TailwindSpark - Marketing Demo',
    '/#/demos': 'TailwindSpark - All Demos',
  };

  return titles[path] || 'TailwindSpark';
};
