import React from 'react';
import { AnimationShowcase } from '../sections/AnimationShowcase';

export const AnimationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Animation Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore Tailwind CSS's powerful animation and transition utilities including hover effects, loading animations, keyframe animations, and interactive transitions.
          </p>
        </div>

        <div className="space-y-16">
          <AnimationShowcase />
        </div>
      </div>
    </div>
  );
};
