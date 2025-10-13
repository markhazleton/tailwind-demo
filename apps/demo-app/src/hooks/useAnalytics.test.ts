import { renderHook } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useAnalytics } from './useAnalytics';

// Mock gtag function
const mockGtag = vi.fn();

// Set up window.gtag mock
beforeEach(() => {
  mockGtag.mockClear();
  Object.defineProperty(window, 'gtag', {
    value: mockGtag,
    writable: true,
    configurable: true,
  });
});

const renderUseAnalytics = (initialEntries: string[] = ['/']) => {
  return renderHook(() => useAnalytics(), {
    wrapper: ({ children }) => React.createElement(MemoryRouter, { initialEntries }, children),
  });
};

describe('useAnalytics', () => {
  describe('Page Tracking', () => {
    it('tracks page view on mount', () => {
      renderUseAnalytics(['/']);

      expect(mockGtag).toHaveBeenCalledWith('config', 'G-319249408', {
        page_path: '/',
        page_title: 'TailwindSpark - Home',
      });
    });

    it('tracks with correct tracking ID and page configuration', () => {
      renderUseAnalytics(['/']);

      expect(mockGtag).toHaveBeenCalledWith(
        'config',
        'G-319249408',
        expect.objectContaining({
          page_path: expect.any(String),
          page_title: expect.any(String),
        })
      );
    });

    it('does not track when gtag is not available', () => {
      delete (window as typeof window & { gtag?: unknown }).gtag;

      renderUseAnalytics(['/']);

      expect(mockGtag).not.toHaveBeenCalled();
    });
  });
  describe('Event Tracking Methods', () => {
    it('provides trackEvent method', () => {
      const { result } = renderUseAnalytics();

      result.current.trackEvent('click', 'button', 'header-cta', 1);

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'button',
        event_label: 'header-cta',
        value: 1,
      });
    });

    it('provides trackEvent method without optional parameters', () => {
      const { result } = renderUseAnalytics();

      result.current.trackEvent('submit', 'form');

      expect(mockGtag).toHaveBeenCalledWith('event', 'submit', {
        event_category: 'form',
        event_label: undefined,
        value: undefined,
      });
    });

    it('provides trackComponentInteraction method', () => {
      const { result } = renderUseAnalytics();

      result.current.trackComponentInteraction('Button', 'click');

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'component_interaction',
        event_label: 'Button',
        value: undefined,
      });
    });

    it('provides trackAnimationInteraction method', () => {
      const { result } = renderUseAnalytics();

      result.current.trackAnimationInteraction('fade-in', 'trigger');

      expect(mockGtag).toHaveBeenCalledWith('event', 'trigger', {
        event_category: 'animation_interaction',
        event_label: 'fade-in',
        value: undefined,
      });
    });

    it('provides trackDemoInteraction method', () => {
      const { result } = renderUseAnalytics();

      result.current.trackDemoInteraction('ecommerce', 'view');

      expect(mockGtag).toHaveBeenCalledWith('event', 'view', {
        event_category: 'demo_interaction',
        event_label: 'ecommerce',
        value: undefined,
      });
    });

    it('does not track events when gtag is not available', () => {
      delete (window as typeof window & { gtag?: unknown }).gtag;
      const { result } = renderUseAnalytics();

      result.current.trackEvent('click', 'button');
      result.current.trackComponentInteraction('Button', 'click');
      result.current.trackAnimationInteraction('fade', 'start');
      result.current.trackDemoInteraction('demo', 'view');

      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('Return Values', () => {
    it('returns all tracking methods', () => {
      const { result } = renderUseAnalytics();

      expect(result.current).toHaveProperty('trackEvent');
      expect(result.current).toHaveProperty('trackComponentInteraction');
      expect(result.current).toHaveProperty('trackAnimationInteraction');
      expect(result.current).toHaveProperty('trackDemoInteraction');

      expect(typeof result.current.trackEvent).toBe('function');
      expect(typeof result.current.trackComponentInteraction).toBe('function');
      expect(typeof result.current.trackAnimationInteraction).toBe('function');
      expect(typeof result.current.trackDemoInteraction).toBe('function');
    });
  });

  describe('Complex Scenarios', () => {
    it('tracks multiple events in sequence', () => {
      const { result } = renderUseAnalytics();

      result.current.trackComponentInteraction('Modal', 'open');
      result.current.trackComponentInteraction('Button', 'click');
      result.current.trackEvent('form_submit', 'user_action', 'contact', 1);

      expect(mockGtag).toHaveBeenCalledTimes(4); // 1 page view + 3 events
    });

    it('maintains tracking functionality across re-renders', () => {
      const { result, rerender } = renderUseAnalytics();

      result.current.trackEvent('first', 'test');
      rerender();
      result.current.trackEvent('second', 'test');

      expect(mockGtag).toHaveBeenCalledWith('event', 'first', expect.any(Object));
      expect(mockGtag).toHaveBeenCalledWith('event', 'second', expect.any(Object));
    });
  });
});
