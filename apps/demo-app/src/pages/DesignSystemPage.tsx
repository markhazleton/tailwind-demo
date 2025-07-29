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
            TailwindSpark Component Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            A comprehensive showcase of production-ready React components built with Tailwind CSS, TypeScript, and accessibility best practices. 
            Featuring buttons, forms, cards, and modals with all variants and interactive states.
          </p>
          <div className="flex justify-center gap-3 text-sm">
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium">
              ✨ TailwindSpark
            </span>
            <a 
              href="https://webspark.markhazleton.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              🌐 WebSpark Portfolio
            </a>
          </div>
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
