import React from 'react';

interface BuildInfoProps {
  className?: string;
  variant?: 'full' | 'version-only' | 'date-only';
}

export const BuildInfo: React.FC<BuildInfoProps> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  const buildDate = __BUILD_DATE__;
  const buildVersion = __BUILD_VERSION__;
  
  // Format the date for display
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const renderContent = () => {
    switch (variant) {
      case 'version-only':
        return `v${buildVersion}`;
      case 'date-only':
        return formatDate(buildDate);
      case 'full':
      default:
        return (
          <>
            <span className="font-medium">v{buildVersion}</span>
            <span className="mx-2">•</span>
            <span>Built {formatDate(buildDate)}</span>
          </>
        );
    }
  };

  return (
    <div 
      className={`text-xs text-gray-500 dark:text-gray-500 ${className}`}
      title={`Build version ${buildVersion}, built on ${formatDate(buildDate)}`}
    >
      {renderContent()}
    </div>
  );
};

export default BuildInfo;
