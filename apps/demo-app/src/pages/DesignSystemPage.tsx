import React from 'react';
import { ButtonShowcase } from '../sections/ButtonShowcase';
import { CardShowcase } from '../sections/CardShowcase';
import { FormShowcase } from '../sections/FormShowcase';
import { ModalShowcase } from '../sections/ModalShowcase';

export const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Design System Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive showcase of our Tailwind CSS design system components including buttons, forms, cards, and modals with all variants and states.
          </p>
        </div>

        <div className="space-y-16">
          <ButtonShowcase />
          <FormShowcase />
          <CardShowcase />
          <ModalShowcase />
        </div>
      </div>
    </div>
  );
};
