import { clsx } from 'clsx';
import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const cardVariants = {
  default: 'bg-white dark:bg-secondary-800',
  bordered: 'bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700',
  elevated: 'bg-white dark:bg-secondary-800 shadow-lg',
};

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-xl transition-all duration-200',
          cardVariants[variant],
          padding !== 'none' && cardPadding[padding],
          className
        )}
        {...props}
      >
        {header && (
          <div className="border-secondary-200 dark:border-secondary-700 mb-4 border-b pb-4 last:mb-0 last:border-b-0 last:pb-0">
            {header}
          </div>
        )}
        <div className={padding === 'none' ? cardPadding.md : ''}>{children}</div>
        {footer && (
          <div className="border-secondary-200 dark:border-secondary-700 mt-4 border-t pt-4 first:mt-0 first:border-t-0 first:pt-0">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('space-y-1', className)} {...props}>
        {title && (
          <h3 className="text-secondary-900 dark:text-secondary-100 text-lg font-semibold">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">{subtitle}</p>
        )}
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('text-secondary-700 dark:text-secondary-300', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('flex items-center gap-2', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
