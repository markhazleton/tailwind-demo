import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<LoadingSpinner />);
      
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render as an animated spinner by default', () => {
      render(<LoadingSpinner />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toBeInTheDocument();
    });

    it('should render an SVG element', () => {
      render(<LoadingSpinner />);
      
      const svg = document.querySelector('svg');
      expect(svg?.tagName).toBe('svg');
    });
  });

  describe('Size Variants', () => {
    it('should render small size correctly', () => {
      render(<LoadingSpinner size="sm" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('w-4', 'h-4');
    });

    it('should render medium size correctly (default)', () => {
      render(<LoadingSpinner size="md" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('w-6', 'h-6');
    });

    it('should render large size correctly', () => {
      render(<LoadingSpinner size="lg" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('w-8', 'h-8');
    });

    it('should default to medium size when no size specified', () => {
      render(<LoadingSpinner />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('w-6', 'h-6');
    });
  });

  describe('Color Variants', () => {
    it('should render with color classes', () => {
      render(<LoadingSpinner color="primary" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container?.className).toContain('text-');
    });

    it('should render secondary color correctly', () => {
      render(<LoadingSpinner color="secondary" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('text-secondary-600');
    });

    it('should render white color correctly', () => {
      render(<LoadingSpinner color="white" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('text-white');
    });
  });

  describe('Custom Classes', () => {
    it('should apply custom className', () => {
      render(<LoadingSpinner className="custom-spinner" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('custom-spinner');
    });

    it('should combine custom className with default classes', () => {
      render(<LoadingSpinner className="custom-class" size="lg" color="secondary" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('custom-class');
      expect(container).toHaveClass('animate-spin');
      expect(container).toHaveClass('w-8', 'h-8');
      expect(container).toHaveClass('text-secondary-600');
    });
  });

  describe('Logo Variant', () => {
    it('should render with logo when withLogo is true', () => {
      render(<LoadingSpinner withLogo={true} />);
      
      // Should not render the spinning SVG
      expect(document.querySelector('.animate-spin')).not.toBeInTheDocument();
      
      // Should render a container with flex layout
      const container = document.querySelector('.flex.flex-col.items-center.justify-center.gap-4');
      expect(container).toBeInTheDocument();
    });

    it('should render default message with logo variant', () => {
      render(<LoadingSpinner withLogo={true} />);
      
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render custom message with logo variant', () => {
      render(<LoadingSpinner withLogo={true} message="Please wait..." />);
      
      expect(screen.getByText('Please wait...')).toBeInTheDocument();
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('should not render message when message is empty with logo variant', () => {
      render(<LoadingSpinner withLogo={true} message="" />);
      
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(document.querySelector('p')).not.toBeInTheDocument();
    });

    it('should apply custom className to logo variant container', () => {
      render(<LoadingSpinner withLogo={true} className="custom-logo-spinner" />);
      
      const container = document.querySelector('.flex.flex-col.items-center.justify-center.gap-4');
      expect(container).toHaveClass('custom-logo-spinner');
    });

    it('should have animated overlay on logo', () => {
      render(<LoadingSpinner withLogo={true} />);
      
      const overlay = document.querySelector('.absolute.inset-0.animate-pulse.rounded-full');
      expect(overlay).toBeInTheDocument();
      expect(overlay?.className).toContain('bg-');
    });

    it('should have animated message text', () => {
      render(<LoadingSpinner withLogo={true} message="Custom message" />);
      
      const messageElement = screen.getByText('Custom message');
      expect(messageElement).toHaveClass('animate-pulse');
      expect(messageElement).toHaveClass('text-sm');
    });
  });

  describe('SVG Structure', () => {
    it('should render correct SVG viewBox and attributes', () => {
      render(<LoadingSpinner />);
      
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'none');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
      expect(svg).toHaveClass('h-full', 'w-full');
    });

    it('should render circle and path elements', () => {
      render(<LoadingSpinner />);
      
      const svg = document.querySelector('svg');
      const circle = svg?.querySelector('circle');
      const path = svg?.querySelector('path');
      
      expect(circle).toBeInTheDocument();
      expect(path).toBeInTheDocument();
    });

    it('should have correct circle attributes', () => {
      render(<LoadingSpinner />);
      
      const circle = document.querySelector('circle');
      expect(circle).toHaveAttribute('cx', '12');
      expect(circle).toHaveAttribute('cy', '12');
      expect(circle).toHaveAttribute('r', '10');
      expect(circle).toHaveAttribute('stroke', 'currentColor');
      expect(circle).toHaveAttribute('stroke-width', '4');
      expect(circle).toHaveClass('opacity-25');
    });

    it('should have correct path attributes', () => {
      render(<LoadingSpinner />);
      
      const path = document.querySelector('path');
      expect(path).toHaveAttribute('fill', 'currentColor');
      expect(path).toHaveClass('opacity-75');
      expect(path).toHaveAttribute('d');
    });
  });

  describe('Component Combinations', () => {
    it('should combine all props correctly for regular spinner', () => {
      render(<LoadingSpinner size="lg" color="white" className="test-class" />);
      
      const container = document.querySelector('.animate-spin');
      expect(container).toHaveClass('animate-spin');
      expect(container).toHaveClass('w-8', 'h-8');
      expect(container).toHaveClass('text-white');
      expect(container).toHaveClass('test-class');
    });

    it('should combine all props correctly for logo spinner', () => {
      render(<LoadingSpinner 
        withLogo={true} 
        size="sm" 
        className="logo-test" 
        message="Custom loading message" 
      />);
      
      const container = document.querySelector('.flex.flex-col.items-center.justify-center.gap-4');
      expect(container).toHaveClass('logo-test');
      expect(screen.getByText('Custom loading message')).toBeInTheDocument();
    });

    it('should prioritize withLogo over other display options', () => {
      render(<LoadingSpinner withLogo={true} size="lg" color="secondary" />);
      
      // Should render logo variant, not regular spinner
      expect(document.querySelector('.animate-spin')).not.toBeInTheDocument();
      const logoContainer = document.querySelector('.relative');
      expect(logoContainer).toBeInTheDocument();
    });
  });

  describe('Edge Cases and Props', () => {
    it('should handle all prop combinations', () => {
      const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
      const colors: Array<'primary' | 'secondary' | 'white'> = ['primary', 'secondary', 'white'];
      
      sizes.forEach(size => {
        colors.forEach(color => {
          const { unmount } = render(<LoadingSpinner size={size} color={color} />);
          
          const container = document.querySelector('.animate-spin');
          expect(container).toBeInTheDocument();
          
          unmount();
        });
      });
    });

    it('should handle boolean props correctly', () => {
      // Test explicit false
      const { rerender } = render(<LoadingSpinner withLogo={false} />);
      expect(document.querySelector('svg')).toBeInTheDocument();
      expect(document.querySelector('.animate-spin')).toBeInTheDocument();
      
      // Test explicit true - should render logo variant instead
      rerender(<LoadingSpinner withLogo={true} />);
      expect(document.querySelector('.flex.flex-col.items-center.justify-center.gap-4')).toBeInTheDocument();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render without errors when all props are provided', () => {
      expect(() => {
        render(
          <LoadingSpinner 
            size="lg"
            color="secondary"
            className="all-props-test"
            withLogo={true}
            message="All props provided"
          />
        );
      }).not.toThrow();
    });

    it('should render without errors when minimal props are provided', () => {
      expect(() => {
        render(<LoadingSpinner />);
      }).not.toThrow();
    });
  });
});