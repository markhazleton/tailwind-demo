import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

// Icons used in the component
const IconSave = () => <span>💾</span>;
const IconKey = () => <span>🔑</span>;
const IconShield = () => <span>🛡️</span>;
const IconGlobe = () => <span>🌐</span>;
const IconMail = () => <span>✉️</span>;
const IconCreditCard = () => <span>💳</span>;

interface SettingsSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, description, icon, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

const FormField: React.FC<{
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  description?: string;
  required?: boolean;
}> = ({ label, type = 'text', value, onChange, placeholder, description, required }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
    {description && (
      <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
    )}
  </div>
);

const ToggleField: React.FC<{
  label: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}> = ({ label, description, enabled, onChange }) => (
  <div className="flex items-center justify-between">
    <div className="flex-1">
      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
    <button
      type="button"
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
        enabled ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
      }`}
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export const SettingsPage: React.FC = () => {
  // General Settings State
  const [companyName, setCompanyName] = useState('PromptSpark');
  const [companyEmail, setCompanyEmail] = useState('admin@promptspark.com');
  const [companyWebsite, setCompanyWebsite] = useState('https://promptspark.com');
  const [timezone, setTimezone] = useState('UTC-8');
  
  // Security Settings State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [passwordPolicy, setPasswordPolicy] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  
  // Notification Settings State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  
  // API Settings State
  const [apiKey, setApiKey] = useState('sk-1234567890abcdef...');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [rateLimitEnabled, setRateLimitEnabled] = useState(true);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleSaveSettings = () => {
    console.log('Saving settings...');
    setHasUnsavedChanges(false);
    // In a real app, you'd make an API call here
  };

  const handleGenerateApiKey = () => {
    const newKey = 'sk-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
    setHasUnsavedChanges(true);
  };

  return (
    <DashboardLayout 
      pageTitle="Settings"
      pageDescription="Configure your application preferences and security settings."
      headerActions={
        hasUnsavedChanges && (
          <button
            onClick={handleSaveSettings}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <IconSave />
            Save Changes
          </button>
        )
      }
    >
      <div className="space-y-8">
        {/* General Settings */}
        <SettingsSection
          title="General"
          description="Basic application settings and preferences"
          icon={<IconGlobe />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Company Name"
              value={companyName}
              onChange={(value) => {
                setCompanyName(value);
                setHasUnsavedChanges(true);
              }}
              placeholder="Enter company name"
            />
            <FormField
              label="Contact Email"
              type="email"
              value={companyEmail}
              onChange={(value) => {
                setCompanyEmail(value);
                setHasUnsavedChanges(true);
              }}
              placeholder="admin@company.com"
            />
            <FormField
              label="Website URL"
              type="url"
              value={companyWebsite}
              onChange={(value) => {
                setCompanyWebsite(value);
                setHasUnsavedChanges(true);
              }}
              placeholder="https://example.com"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => {
                  setTimezone(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="UTC-12">UTC-12 (Baker Island)</option>
                <option value="UTC-8">UTC-8 (Pacific)</option>
                <option value="UTC-5">UTC-5 (Eastern)</option>
                <option value="UTC+0">UTC+0 (London)</option>
                <option value="UTC+1">UTC+1 (Paris)</option>
                <option value="UTC+8">UTC+8 (Singapore)</option>
                <option value="UTC+9">UTC+9 (Tokyo)</option>
              </select>
            </div>
          </div>
        </SettingsSection>

        {/* Security Settings */}
        <SettingsSection
          title="Security"
          description="Manage authentication and security policies"
          icon={<IconShield />}
        >
          <div className="space-y-6">
            <ToggleField
              label="Two-Factor Authentication"
              description="Require 2FA for all user accounts"
              enabled={twoFactorEnabled}
              onChange={(enabled) => {
                setTwoFactorEnabled(enabled);
                setHasUnsavedChanges(true);
              }}
            />
            <ToggleField
              label="Password Policy"
              description="Enforce strong password requirements"
              enabled={passwordPolicy}
              onChange={(enabled) => {
                setPasswordPolicy(enabled);
                setHasUnsavedChanges(true);
              }}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                min="5"
                max="1440"
                value={sessionTimeout}
                onChange={(e) => {
                  setSessionTimeout(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </SettingsSection>

        {/* Notification Settings */}
        <SettingsSection
          title="Notifications"
          description="Configure email and push notification preferences"
          icon={<IconMail />}
        >
          <div className="space-y-6">
            <ToggleField
              label="Email Notifications"
              description="Receive important updates via email"
              enabled={emailNotifications}
              onChange={(enabled) => {
                setEmailNotifications(enabled);
                setHasUnsavedChanges(true);
              }}
            />
            <ToggleField
              label="Push Notifications"
              description="Get real-time browser notifications"
              enabled={pushNotifications}
              onChange={(enabled) => {
                setPushNotifications(enabled);
                setHasUnsavedChanges(true);
              }}
            />
            <ToggleField
              label="Weekly Reports"
              description="Receive weekly analytics summaries"
              enabled={weeklyReports}
              onChange={(enabled) => {
                setWeeklyReports(enabled);
                setHasUnsavedChanges(true);
              }}
            />
            <ToggleField
              label="Security Alerts"
              description="Get notified of security events"
              enabled={securityAlerts}
              onChange={(enabled) => {
                setSecurityAlerts(enabled);
                setHasUnsavedChanges(true);
              }}
            />
          </div>
        </SettingsSection>

        {/* API Settings */}
        <SettingsSection
          title="API Configuration"
          description="Manage API keys and integration settings"
          icon={<IconKey />}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                API Key
              </label>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  readOnly
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 cursor-not-allowed"
                />
                <button
                  onClick={handleGenerateApiKey}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Regenerate
                </button>
              </div>
            </div>
            <FormField
              label="Webhook URL"
              type="url"
              value={webhookUrl}
              onChange={(value) => {
                setWebhookUrl(value);
                setHasUnsavedChanges(true);
              }}
              placeholder="https://your-app.com/webhook"
            />
            <ToggleField
              label="Rate Limiting"
              description="Enable API rate limiting protection"
              enabled={rateLimitEnabled}
              onChange={(enabled) => {
                setRateLimitEnabled(enabled);
                setHasUnsavedChanges(true);
              }}
            />
          </div>
        </SettingsSection>

        {/* Billing Settings */}
        <SettingsSection
          title="Billing & Subscription"
          description="Manage your subscription and payment information"
          icon={<IconCreditCard />}
        >
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Pro Plan</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">$29/month • Next billing: Jan 15, 2024</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Manage Subscription
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">1,234</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">API Calls This Month</div>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">89%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Storage Used</div>
              </div>
            </div>
          </div>
        </SettingsSection>
      </div>
    </DashboardLayout>
  );
};
