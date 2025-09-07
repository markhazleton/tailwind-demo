import { clsx } from 'clsx';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'error' | 'success';
}

const inputVariants = {
  default:
    'border-border dark:border-border-strong focus:border-brand focus:ring-brand',
  error: 'border-error-300 dark:border-error-600 focus:border-error-500 focus:ring-error-500',
  success:
    'border-success-300 dark:border-success-600 focus:border-success-500 focus:ring-success-500',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, helperText, leftIcon, rightIcon, variant = 'default', id, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || `input-${generatedId}`;
    const actualVariant = error ? 'error' : variant;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-secondary-900 dark:text-secondary-100 block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <div className="text-secondary-400 h-5 w-5">{leftIcon}</div>
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={clsx(
              'text-secondary-900 dark:text-secondary-100 dark:bg-secondary-800 placeholder-secondary-500 dark:placeholder-secondary-400 block w-full rounded-lg border bg-white px-3 py-2',
              'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
              'disabled:bg-secondary-50 dark:disabled:bg-secondary-900 disabled:text-secondary-500 disabled:cursor-not-allowed',
              inputVariants[actualVariant],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="text-secondary-400 h-5 w-5">{rightIcon}</div>
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={clsx(
              'text-sm',
              error
                ? 'text-error-600 dark:text-error-400'
                : 'text-secondary-500 dark:text-secondary-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, variant = 'default', id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || `textarea-${generatedId}`;
    const actualVariant = error ? 'error' : variant;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-secondary-900 dark:text-secondary-100 block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={clsx(
            'text-secondary-900 dark:text-secondary-100 dark:bg-secondary-800 placeholder-secondary-500 dark:placeholder-secondary-400 block w-full rounded-lg border bg-white px-3 py-2',
            'resize-vertical transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:bg-secondary-50 dark:disabled:bg-secondary-900 disabled:text-secondary-500 disabled:cursor-not-allowed',
            inputVariants[actualVariant],
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={clsx(
              'text-sm',
              error
                ? 'text-error-600 dark:text-error-400'
                : 'text-secondary-500 dark:text-secondary-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, variant = 'default', options, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || `select-${generatedId}`;
    const actualVariant = error ? 'error' : variant;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={selectId}
            className="text-secondary-900 dark:text-secondary-100 block text-sm font-medium"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={clsx(
            'text-secondary-900 dark:text-secondary-100 dark:bg-secondary-800 block w-full rounded-lg border bg-white px-3 py-2',
            'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:bg-secondary-50 dark:disabled:bg-secondary-900 disabled:text-secondary-500 disabled:cursor-not-allowed',
            inputVariants[actualVariant],
            className
          )}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {(error || helperText) && (
          <p
            className={clsx(
              'text-sm',
              error
                ? 'text-error-600 dark:text-error-400'
                : 'text-secondary-500 dark:text-secondary-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || `checkbox-${generatedId}`;

    return (
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={clsx(
              'border-border dark:border-border-strong text-brand focus:ring-brand h-4 w-4 rounded focus:ring-offset-0',
              'disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-secondary-900 dark:text-secondary-100 ml-2 block text-sm"
            >
              {label}
            </label>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={clsx(
              'text-sm',
              error
                ? 'text-error-600 dark:text-error-400'
                : 'text-secondary-500 dark:text-secondary-400'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const radioId = id || `radio-${generatedId}`;

    return (
      <div className="flex items-center">
        <input
          ref={ref}
          id={radioId}
          type="radio"
          className={clsx(
            'border-border dark:border-border-strong text-brand focus:ring-brand h-4 w-4 focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="text-secondary-900 dark:text-secondary-100 ml-2 block text-sm"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
