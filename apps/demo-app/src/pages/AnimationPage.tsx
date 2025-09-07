import React from 'react';
import { AnimationShowcase } from '../sections/AnimationShowcase';

export const AnimationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            TailwindSpark Animation Gallery
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Discover the power of Tailwind CSS animations and transitions through interactive
            examples. From subtle hover effects to complex keyframe animations, see how
            utility-first CSS creates smooth, performant animations.
          </p>
          <div className="flex justify-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              ✨ Interactive Examples
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              🎬 CSS Animations
            </span>
            <a
              href="https://tailwindcss.com/docs/animation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
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
