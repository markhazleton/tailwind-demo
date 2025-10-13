import { fireEvent, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useKeyboardShortcuts } from './useKeyboardShortcuts';

describe('useKeyboardShortcuts', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Clean up any event listeners
    document.removeEventListener('keydown', vi.fn());
  });

  it('calls onSearch when Ctrl+K is pressed', () => {
    const onSearch = vi.fn();
    const onThemeToggle = vi.fn();
    const onEscape = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch, onThemeToggle, onEscape }));

    // Simulate Ctrl+K
    fireEvent.keyDown(document, { key: 'k', ctrlKey: true });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onThemeToggle).not.toHaveBeenCalled();
    expect(onEscape).not.toHaveBeenCalled();
  });

  it('calls onSearch when Cmd+K is pressed (Mac)', () => {
    const onSearch = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch }));

    // Simulate Cmd+K (metaKey for Mac)
    fireEvent.keyDown(document, { key: 'k', metaKey: true });

    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('calls onThemeToggle when Ctrl+T is pressed', () => {
    const onSearch = vi.fn();
    const onThemeToggle = vi.fn();
    const onEscape = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch, onThemeToggle, onEscape }));

    // Simulate Ctrl+T
    fireEvent.keyDown(document, { key: 't', ctrlKey: true });

    expect(onThemeToggle).toHaveBeenCalledTimes(1);
    expect(onSearch).not.toHaveBeenCalled();
    expect(onEscape).not.toHaveBeenCalled();
  });

  it('calls onThemeToggle when Cmd+T is pressed (Mac)', () => {
    const onThemeToggle = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onThemeToggle }));

    // Simulate Cmd+T (metaKey for Mac)
    fireEvent.keyDown(document, { key: 't', metaKey: true });

    expect(onThemeToggle).toHaveBeenCalledTimes(1);
  });

  it('calls onEscape when Escape is pressed', () => {
    const onSearch = vi.fn();
    const onThemeToggle = vi.fn();
    const onEscape = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch, onThemeToggle, onEscape }));

    // Simulate Escape key
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onEscape).toHaveBeenCalledTimes(1);
    expect(onSearch).not.toHaveBeenCalled();
    expect(onThemeToggle).not.toHaveBeenCalled();
  });

  it('does not trigger shortcuts when typing in input fields', () => {
    const onSearch = vi.fn();
    const onThemeToggle = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch, onThemeToggle }));

    // Create input element and simulate keydown on it
    const input = document.createElement('input');
    document.body.appendChild(input);

    fireEvent.keyDown(input, { key: 'k', ctrlKey: true });
    fireEvent.keyDown(input, { key: 't', ctrlKey: true });

    expect(onSearch).not.toHaveBeenCalled();
    expect(onThemeToggle).not.toHaveBeenCalled();

    // Clean up
    document.body.removeChild(input);
  });

  it('does not trigger shortcuts when typing in textarea fields', () => {
    const onSearch = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch }));

    // Create textarea element and simulate keydown on it
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    fireEvent.keyDown(textarea, { key: 'k', ctrlKey: true });

    expect(onSearch).not.toHaveBeenCalled();

    // Clean up
    document.body.removeChild(textarea);
  });

  it('does not trigger shortcuts when typing in select fields', () => {
    const onSearch = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch }));

    // Create select element and simulate keydown on it
    const select = document.createElement('select');
    document.body.appendChild(select);

    fireEvent.keyDown(select, { key: 'k', ctrlKey: true });

    expect(onSearch).not.toHaveBeenCalled();

    // Clean up
    document.body.removeChild(select);
  });

  it('works with undefined callbacks', () => {
    // Should not throw errors when callbacks are undefined
    expect(() => {
      renderHook(() => useKeyboardShortcuts({}));

      fireEvent.keyDown(document, { key: 'k', ctrlKey: true });
      fireEvent.keyDown(document, { key: 't', ctrlKey: true });
      fireEvent.keyDown(document, { key: 'Escape' });
    }).not.toThrow();
  });

  it('prevents default behavior for Ctrl+K and Ctrl+T', () => {
    const onSearch = vi.fn();
    const onThemeToggle = vi.fn();

    renderHook(() => useKeyboardShortcuts({ onSearch, onThemeToggle }));

    // Create mock event with preventDefault
    const mockEvent = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
    const preventDefaultSpy = vi.spyOn(mockEvent, 'preventDefault');

    fireEvent(document, mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('cleans up event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useKeyboardShortcuts({}));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});
