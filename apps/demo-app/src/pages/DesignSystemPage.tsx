import React from 'react';
import { ButtonShowcase } from '../sections/ButtonShowcase';
import { CardShowcase } from '../sections/CardShowcase';
import { FormShowcase } from '../sections/FormShowcase';
import { ModalShowcase } from '../sections/ModalShowcase';

export const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface transition-colors">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-text">
            TailwindSpark Component Library
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-xl text-text-muted">
            A comprehensive showcase of production-ready React components built with Tailwind CSS,
            TypeScript, and accessibility best practices. Featuring buttons, forms, cards, and
            modals with all variants and interactive states.
          </p>
          <div className="flex justify-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 font-medium text-brand">
              ✨ TailwindSpark
            </span>
            <a
              href="https://webspark.markhazleton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-surface-alt px-3 py-1 font-medium text-text transition-colors hover:bg-border"
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
