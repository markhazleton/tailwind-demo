import React from 'react';
import { Logo } from './Logo';

interface TailwindSparkBrandProps {
  variant?: 'hero' | 'footer' | 'card' | 'inline';
  className?: string;
  showDescription?: boolean;
  logoTitleTogether?: boolean; // New prop to control logo and title placement
}

export const TailwindSparkBrand: React.FC<TailwindSparkBrandProps> = ({
  variant = 'card',
  className = '',
  showDescription = true,
  logoTitleTogether = false,
}) => {
  const variants = {
    hero: {
      containerClass: 'text-center py-12',
      logoSize: 'xl' as const,
      titleClass: logoTitleTogether
        ? 'text-4xl md:text-5xl font-bold'
        : 'text-4xl md:text-5xl font-bold mt-6 mb-4',
      descriptionClass: 'text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto',
    },
    footer: {
      containerClass: 'text-center py-8',
      logoSize: 'lg' as const,
      titleClass: 'text-2xl font-bold mt-4 mb-2',
      descriptionClass: 'text-sm text-gray-500 dark:text-gray-500',
    },
    card: {
      containerClass: 'text-center p-6',
      logoSize: 'lg' as const,
      titleClass: 'text-xl font-bold mt-4 mb-2',
      descriptionClass: 'text-sm text-gray-600 dark:text-gray-400',
    },
    inline: {
      containerClass: 'flex items-center gap-3',
      logoSize: 'md' as const,
      titleClass: 'text-lg font-bold',
      descriptionClass: 'text-sm text-gray-600 dark:text-gray-400',
    },
  };

  const config = variants[variant];

  if (variant === 'inline') {
    return (
      <div className={`${config.containerClass} ${className}`}>
        <Logo size={config.logoSize} showText={false} />
        <div>
          <h3 className={config.titleClass}>
            <span className="from-primary-600 to-accent-700 bg-gradient-to-r bg-clip-text text-transparent">
              TailwindSpark
            </span>
          </h3>
          {showDescription && (
            <p className={config.descriptionClass}>Interactive Tailwind CSS Showcase</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${config.containerClass} ${className}`}>
      {variant === 'hero' && logoTitleTogether ? (
        <div className="mb-4 flex items-center justify-center gap-4">
          <Logo size={config.logoSize} showText={false} />
          <h3 className={config.titleClass}>
            <span className="from-primary-600 to-accent-700 bg-gradient-to-r bg-clip-text text-transparent">
              TailwindSpark
            </span>
          </h3>
        </div>
      ) : (
        <>
          <Logo size={config.logoSize} showText={false} />
          <h3 className={config.titleClass}>
            <span className="from-primary-600 to-accent-700 bg-gradient-to-r bg-clip-text text-transparent">
              TailwindSpark
            </span>
          </h3>
        </>
      )}
      {showDescription && (
        <div className={config.descriptionClass}>
          {variant === 'hero' ? (
            <p>
              A comprehensive React TypeScript showcase of Tailwind CSS components, animations, and
              design systems. Part of the{' '}
              <a
                href="https://webspark.markhazleton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
              >
                WebSpark Portfolio
              </a>{' '}
              by{' '}
              <a
                href="https://markhazleton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
              >
                Mark Hazleton
              </a>
              .
            </p>
          ) : (
            <p>Interactive Tailwind CSS Showcase</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TailwindSparkBrand;
