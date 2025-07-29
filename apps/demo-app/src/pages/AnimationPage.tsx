import React from 'react';
import { AnimationShowcase } from '../sections/AnimationShowcase';

export const AnimationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            TailwindSpark Animation Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Discover the power of Tailwind CSS animations and transitions through interactive examples. 
            From subtle hover effects to complex keyframe animations, see how utility-first CSS creates smooth, performant animations.
          </p>
          <div className="flex justify-center gap-3 text-sm">
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium">
              ✨ Interactive Examples
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
              🎬 CSS Animations
            </span>
            <a 
              href="https://tailwindcss.com/docs/animation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              📚 Tailwind Docs
            </a>
          </div>
        </div>

        <div className="space-y-16">
          <AnimationShowcase />
        </div>
      </div>
    </div>
  );
};
