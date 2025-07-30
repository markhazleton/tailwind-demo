import React from 'react';
import { Link } from 'react-router-dom';

export const DemosPage: React.FC = () => {
  const demos = [
    {
      id: 'dashboard',
      title: 'SaaS Dashboard',
      path: '/dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive SaaS dashboard showcasing complex data visualization, responsive design, and interactive analytics.',
      features: [
        'Real-time data visualization with charts and metrics',
        'Responsive grid layouts and complex table structures',
        'Dark mode implementation with smooth transitions',
        'Interactive filtering and search functionality',
        'Modern card-based interface design',
        'Navigation with breadcrumbs and user management'
      ],
      techHighlights: [
        'Advanced Grid Systems',
        'Complex Flexbox Layouts',
        'Dark Mode Implementation',
        'Interactive States & Hover Effects',
        'Responsive Design Patterns',
        'Component Composition'
      ],
      businessValue: 'Perfect for demonstrating enterprise application interfaces, data visualization capabilities, and complex user workflows that are common in B2B SaaS products.',
      tailwindShowcase: 'Demonstrates grid systems, dark mode utilities, responsive design, complex layouts, and modern UI patterns with production-level component organization.'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      path: '/ecommerce',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern online store with product grids, advanced filtering, shopping cart functionality, and responsive checkout flow.',
      features: [
        'Product gallery with high-quality image displays',
        'Advanced filtering and search capabilities',
        'Shopping cart with quantity management',
        'Responsive product cards and layouts',
        'Modal dialogs for quick product views',
        'Mobile-optimized navigation and checkout'
      ],
      techHighlights: [
        'CSS Grid & Flexbox Mastery',
        'Modal & Overlay Systems',
        'Form Validation States',
        'Image Optimization Techniques',
        'Mobile-First Design',
        'Animation & Micro-interactions'
      ],
      businessValue: 'Showcases e-commerce expertise with product-focused design, conversion optimization, and user experience patterns that drive sales and engagement.',
      tailwindShowcase: 'Highlights responsive grid systems, form styling, modal implementations, image optimization, and advanced filtering interfaces using Tailwind utilities.'
    },
    {
      id: 'marketing',
      title: 'Marketing Landing Page',
      path: '/marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A high-converting agency-style landing page with hero sections, testimonials, portfolio gallery, and contact forms.',
      features: [
        'Compelling hero section with gradient backgrounds',
        'Testimonial carousel with auto-rotation',
        'Portfolio gallery with hover effects',
        'Advanced form validation and user feedback',
        'Smooth scroll animations and parallax effects',
        'Conversion-optimized call-to-action elements'
      ],
      techHighlights: [
        'Advanced Gradient Systems',
        'Custom Animation Keyframes',
        'Parallax Scrolling Effects',
        'Form Validation States',
        'Complex Background Patterns',
        'Transform & Transition Utilities'
      ],
      businessValue: 'Demonstrates marketing website expertise with conversion-focused design, modern animations, and lead generation forms that drive business results.',
      tailwindShowcase: 'Showcases advanced animations, gradient backgrounds, form validation, parallax effects, and conversion-optimized layouts using cutting-edge Tailwind features.'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Real-World Tailwind CSS Demos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            These three production-style examples showcase Tailwind CSS in real business scenarios, 
            demonstrating technical complexity, business value, and modern best practices that employers and clients recognize.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 max-w-4xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 italic">
              "Each demo represents a different business use case, showcasing advanced Tailwind features, 
              responsive design, accessibility considerations, and modern UI patterns that solve real problems."
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Technical Complexity
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced Tailwind features like responsive design, dark mode, animations, and complex layouts that mirror actual development projects.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Business Value
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Common use cases covering SaaS dashboards, e-commerce, and marketing sites that potential employers and clients immediately understand.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Best Practices
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Proper component organization, semantic HTML, accessibility considerations, and modern UI patterns following industry standards.
            </p>
          </div>
        </div>

        {/* Demo Showcase */}
        <div className="space-y-16">
          {demos.map((demo, index) => (
            <div key={demo.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-2xl transition-all duration-300 flex items-center justify-center">
                    <Link
                      to={demo.path}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View {demo.title} →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {demo.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {demo.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {demo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Tailwind Techniques
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {demo.techHighlights.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Value */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Business Impact
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {demo.businessValue}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Link
                      to={demo.path}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Explore {demo.title}
                    </Link>
                    <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Explore These Demos?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Each demo represents hundreds of hours of development work, showcasing production-ready 
              Tailwind CSS implementations that solve real business problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start with SaaS Dashboard
              </Link>
              <Link
                to="/design-system"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View Components Library
              </Link>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Built with Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React 19',
              'TypeScript 5.3',
              'Tailwind CSS 3.4',
              'Vite 7',
              'Turborepo',
              'React Router',
              'Headless UI',
              'React Hook Form'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
