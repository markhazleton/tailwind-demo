import React, { useState } from 'react';

export const AnimationShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const [bounceActive, setBounceActive] = useState(false);

  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <>
      {/* Transition Effects */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Transition Effects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Smooth transitions for hover, focus, and state changes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Scale Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Scale Transform</h3>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center">
                <span className="text-white font-medium">Hover Me</span>
              </div>
            </div>
          </div>

          {/* Color Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Color Transition</h3>
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-blue-500 hover:bg-green-500 text-white rounded-lg transition-colors duration-500 font-medium">
                Hover for Color Change
              </button>
            </div>
          </div>

          {/* Opacity Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Opacity Fade</h3>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg transition-opacity duration-700 hover:opacity-30 cursor-pointer flex items-center justify-center">
                <span className="text-white font-medium text-center">Hover Me</span>
              </div>
            </div>
          </div>

          {/* Rotate Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Rotate Transform</h3>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg transition-transform duration-500 hover:rotate-180 cursor-pointer flex items-center justify-center">
                <span className="text-white font-medium">🔄</span>
              </div>
            </div>
          </div>

          {/* Translate Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Slide Transform</h3>
            <div className="flex justify-center overflow-hidden">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg transition-transform duration-300 hover:translate-x-4 cursor-pointer flex items-center justify-center">
                <span className="text-white font-medium">→</span>
              </div>
            </div>
          </div>

          {/* Shadow Transition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Shadow Growth</h3>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer flex items-center justify-center shadow-md">
                <span className="text-white font-medium">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframe Animations */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Keyframe Animations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Built-in CSS animations with Tailwind utility classes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Spin Animation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Spin</h3>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Loading spinner</p>
          </div>

          {/* Ping Animation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ping</h3>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Notification dot</p>
          </div>

          {/* Pulse Animation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Pulse</h3>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setPulseActive(!pulseActive)}
                className={`w-16 h-16 bg-purple-500 rounded-lg text-white font-medium ${pulseActive ? 'animate-pulse' : ''}`}
              >
                {pulseActive ? 'ON' : 'OFF'}
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Toggle pulse effect</p>
          </div>

          {/* Bounce Animation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Bounce</h3>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setBounceActive(!bounceActive)}
                className={`w-12 h-12 bg-red-500 rounded-full text-white font-medium ${bounceActive ? 'animate-bounce' : ''}`}
              >
                ⚽
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Toggle bounce effect</p>
          </div>
        </div>
      </section>

      {/* Interactive Animations */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Interactive Animations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            User-triggered animations and state-based transitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Loading Button */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Loading States</h3>
            <div className="space-y-4">
              <button
                onClick={triggerLoading}
                disabled={isLoading}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95'
                } text-white flex items-center justify-center gap-2`}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                  </>
                ) : (
                  'Start Loading Animation'
                )}
              </button>
            </div>
          </div>

          {/* Modal Animation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Modal Transitions</h3>
            <button
              onClick={() => setShowModal(true)}
              className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Open Animated Modal
            </button>
          </div>
        </div>
      </section>

      {/* Complex Animation Examples */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Complex Animations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Combining multiple animation properties for sophisticated effects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Floating Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Floating Card</h3>
            <div className="flex justify-center">
              <div className="group relative">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl cursor-pointer flex items-center justify-center">
                  <span className="text-white text-2xl font-bold transition-transform duration-300 group-hover:scale-125">✨</span>
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Morphing Button */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Morphing Button</h3>
            <div className="flex justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
                  Hover to Transform
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 animate-pulse"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 animate-bounce">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Animated Modal
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This modal demonstrates entrance animations with bounce and backdrop effects.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
