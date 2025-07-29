import { clsx } from 'clsx';
import * as React from 'react';

interface LucideIconProps {
  size?: number;
  className?: string;
}

// Simple X icon component
const X: React.FC<LucideIconProps> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const modalSizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
        onClick={handleOverlayClick}
      >
        <div className="fixed inset-0 bg-secondary-900 bg-opacity-75 transition-opacity" />
        
        <div
          ref={modalRef}
          className={clsx(
            'relative transform overflow-hidden rounded-xl bg-white dark:bg-secondary-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6',
            modalSizes[size],
            'animate-scale-in',
            className
          )}
        >
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between mb-4">
              {title && (
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                  {title}
                </h3>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="rounded-lg p-1 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 dark:hover:bg-secondary-700 dark:hover:text-secondary-300 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          )}
          
          <div className="text-secondary-700 dark:text-secondary-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  title,
  subtitle,
  children,
  ...props
}) => {
  return (
    <div className={clsx('mb-4', className)} {...props}>
      {title && (
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-1">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-secondary-600 dark:text-secondary-400">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalContent: React.FC<ModalContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx('mb-6', className)} {...props}>
      {children}
    </div>
  );
};

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
