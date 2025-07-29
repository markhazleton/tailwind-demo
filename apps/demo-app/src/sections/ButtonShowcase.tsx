import { Button } from '@tailwindspark/ui-components';
import { Download, Heart, Star } from 'lucide-react';
import React from 'react';

export const ButtonShowcase: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
          Button Components
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-6">
          Interactive buttons with multiple variants, sizes, and states.
        </p>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          With Icons
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<Download size={16} />}>Download</Button>
          <Button variant="secondary" rightIcon={<Star size={16} />}>
            Star
          </Button>
          <Button variant="error" leftIcon={<Heart size={16} />} rightIcon={<Star size={16} />}>
            Love & Star
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          States
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleAsyncAction}>
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Responsive Layout
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Button variant="primary">Button 1</Button>
          <Button variant="secondary">Button 2</Button>
          <Button variant="success">Button 3</Button>
          <Button variant="warning">Button 4</Button>
          <Button variant="error">Button 5</Button>
          <Button variant="ghost">Button 6</Button>
        </div>
      </div>
    </section>
  );
};
