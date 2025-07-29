import { Button, Modal, ModalContent, ModalFooter } from '@tailwind-demo/ui-components';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import React from 'react';

export const ModalShowcase: React.FC = () => {
  const [basicModal, setBasicModal] = React.useState(false);
  const [confirmModal, setConfirmModal] = React.useState(false);
  const [alertModal, setAlertModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [largeModal, setLargeModal] = React.useState(false);

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
          Modal Components
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-6">
          Accessible modals with various sizes and configurations.
        </p>
      </div>

      {/* Modal Triggers */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Modal Types
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setBasicModal(true)}>
            Basic Modal
          </Button>
          <Button variant="secondary" onClick={() => setConfirmModal(true)}>
            Confirmation Modal
          </Button>
          <Button variant="warning" onClick={() => setAlertModal(true)}>
            Alert Modal
          </Button>
          <Button variant="success" onClick={() => setFormModal(true)}>
            Form Modal
          </Button>
          <Button variant="ghost" onClick={() => setLargeModal(true)}>
            Large Modal
          </Button>
        </div>
      </div>

      {/* Basic Modal */}
      <Modal
        isOpen={basicModal}
        onClose={() => setBasicModal(false)}
        title="Basic Modal"
        size="md"
      >
        <ModalContent>
          <p className="text-secondary-600 dark:text-secondary-400">
            This is a basic modal with default configuration. It can contain any content
            and provides a clean, accessible interface for user interactions.
          </p>
          <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
            <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
              Features:
            </h4>
            <ul className="space-y-1 text-sm text-secondary-600 dark:text-secondary-400">
              <li>• Keyboard navigation (ESC to close)</li>
              <li>• Click outside to close</li>
              <li>• Focus management</li>
              <li>• Smooth animations</li>
            </ul>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setBasicModal(false)}>
            Cancel
          </Button>
          <Button onClick={() => setBasicModal(false)}>
            Got it
          </Button>
        </ModalFooter>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        size="sm"
        showCloseButton={false}
      >
        <ModalContent>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-warning-600 dark:text-warning-400" />
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 dark:text-secondary-100">
                Confirm Action
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                Are you sure you want to delete this item?
              </p>
            </div>
          </div>
          <p className="text-secondary-600 dark:text-secondary-400">
            This action cannot be undone. The item will be permanently removed
            from your account.
          </p>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="error" onClick={() => setConfirmModal(false)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      {/* Alert Modal */}
      <Modal
        isOpen={alertModal}
        onClose={() => setAlertModal(false)}
        size="md"
      >
        <ModalContent>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 dark:bg-success-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-success-600 dark:text-success-400" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
              Success!
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Your changes have been saved successfully. You can now continue
              with your workflow.
            </p>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button fullWidth onClick={() => setAlertModal(false)}>
            Continue
          </Button>
        </ModalFooter>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        title="Create New Project"
        size="lg"
      >
        <ModalContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Project Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg 
                         bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Description
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg 
                         bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100
                         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Describe your project"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg 
                               bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="">Select a category</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </form>
        </ModalContent>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setFormModal(false)}>
            Cancel
          </Button>
          <Button onClick={() => setFormModal(false)}>
            Create Project
          </Button>
        </ModalFooter>
      </Modal>

      {/* Large Modal */}
      <Modal
        isOpen={largeModal}
        onClose={() => setLargeModal(false)}
        title="Large Content Modal"
        size="xl"
      >
        <ModalContent>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                  About This Demo
                </h4>
                <p className="text-secondary-600 dark:text-secondary-400">
                  This modal demonstrates how larger content can be displayed effectively.
                  The modal scales appropriately and maintains good usability even with
                  substantial content.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <h5 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Responsive Design
                </h5>
                <p className="text-sm text-primary-700 dark:text-primary-300">
                  Modals adapt to different screen sizes while maintaining usability.
                </p>
              </div>
              <div className="p-4 bg-success-50 dark:bg-success-900/20 rounded-lg">
                <h5 className="font-semibold text-success-900 dark:text-success-100 mb-2">
                  Accessibility
                </h5>
                <p className="text-sm text-success-700 dark:text-success-300">
                  Built with keyboard navigation and screen reader support.
                </p>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-secondary-600 dark:text-secondary-400">
              <h4>Additional Features</h4>
              <ul>
                <li>Smooth animations and transitions</li>
                <li>Customizable sizes and configurations</li>
                <li>Portal rendering for proper layering</li>
                <li>Event handling for various interaction patterns</li>
                <li>Dark mode support with proper contrast</li>
              </ul>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setLargeModal(false)}>
            Close
          </Button>
          <Button onClick={() => setLargeModal(false)}>
            Understood
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};
