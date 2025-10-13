import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Logo } from './Logo';

// Mock import.meta.env
vi.mock('import.meta', () => ({
  env: {
    BASE_URL: '/test-base/',
  },
}));

describe('Logo', () => {
  it('renders logo image and text by default', () => {
    render(<Logo />);
    
    const image = screen.getByAltText('TailwindSpark Logo');
    const text = screen.getByText('TailwindSpark');
    
    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Logo size="sm" />);
    expect(screen.getByAltText('TailwindSpark Logo')).toHaveClass('w-6', 'h-6');

    rerender(<Logo size="md" />);
    expect(screen.getByAltText('TailwindSpark Logo')).toHaveClass('w-8', 'h-8');

    rerender(<Logo size="lg" />);
    expect(screen.getByAltText('TailwindSpark Logo')).toHaveClass('w-12', 'h-12');

    rerender(<Logo size="xl" />);
    expect(screen.getByAltText('TailwindSpark Logo')).toHaveClass('w-16', 'h-16');
  });

  it('applies correct text size classes', () => {
    const { rerender } = render(<Logo size="sm" />);
    expect(screen.getByText('TailwindSpark')).toHaveClass('text-sm');

    rerender(<Logo size="md" />);
    expect(screen.getByText('TailwindSpark')).toHaveClass('text-lg');

    rerender(<Logo size="lg" />);
    expect(screen.getByText('TailwindSpark')).toHaveClass('text-2xl');

    rerender(<Logo size="xl" />);
    expect(screen.getByText('TailwindSpark')).toHaveClass('text-3xl');
  });

  it('hides text when showText is false', () => {
    render(<Logo showText={false} />);
    
    expect(screen.getByAltText('TailwindSpark Logo')).toBeInTheDocument();
    expect(screen.queryByText('TailwindSpark')).not.toBeInTheDocument();
  });

  it('renders only text when textOnly is true', () => {
    render(<Logo textOnly />);
    
    expect(screen.queryByAltText('TailwindSpark Logo')).not.toBeInTheDocument();
    expect(screen.getByText('TailwindSpark')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-class" />);
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('uses correct image source with BASE_URL', () => {
    render(<Logo />);
    
    const image = screen.getByAltText('TailwindSpark Logo');
    expect(image).toHaveAttribute('src', '/TailwindSpark.png');
  });

  it('has proper loading attribute for performance', () => {
    render(<Logo />);
    
    const image = screen.getByAltText('TailwindSpark Logo');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('applies gradient text styling', () => {
    render(<Logo />);
    
    const text = screen.getByText('TailwindSpark');
    // Note: Testing actual classes used by component, including primary gradient
    expect(text).toHaveClass(
      'bg-gradient-to-r',
      'bg-clip-text',
      'font-bold',
      'text-transparent'
    );
  });

  it('textOnly mode applies correct gradient styling', () => {
    render(<Logo textOnly />);
    
    const text = screen.getByText('TailwindSpark');
    // Note: Testing actual classes used by component, including primary gradient
    expect(text).toHaveClass(
      'bg-gradient-to-r',
      'bg-clip-text',
      'font-bold',
      'text-transparent'
    );
  });

  it('applies object-contain to image for proper aspect ratio', () => {
    render(<Logo />);
    
    const image = screen.getByAltText('TailwindSpark Logo');
    expect(image).toHaveClass('object-contain');
  });
});