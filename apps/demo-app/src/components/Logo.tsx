import React from 'react';
import tailwindSparkLogo from '/TailwindSpark.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  textOnly = false
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  if (textOnly) {
    return (
      <span className={`font-bold bg-gradient-to-r from-primary-600 to-accent-700 bg-clip-text text-transparent ${textSizes[size]} ${className}`}>
        TailwindSpark
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* TailwindSpark Brand Logo */}
      <img 
        src={tailwindSparkLogo} 
        alt="TailwindSpark Logo" 
        className={`${sizeClasses[size]} object-contain`}
        loading="lazy"
      />
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-primary-600 to-accent-700 bg-clip-text text-transparent ${textSizes[size]}`}>
          TailwindSpark
        </span>
      )}
    </div>
  );
};

export default Logo;