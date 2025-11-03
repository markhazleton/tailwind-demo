import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, icon, color }) => (
  <div className="rounded-xl border border-secondary-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-secondary-700 dark:bg-secondary-800">
    <div className="mb-4 flex items-center justify-between">
      <div
        className={`h-12 w-12 ${color} flex items-center justify-center rounded-lg text-xl text-white`}
      >
        {icon}
      </div>
      <span
        className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}
      >
        {change}
      </span>
    </div>
    <h3 className="mb-1 text-sm font-medium text-text-muted">{title}</h3>
    <p className="text-2xl font-bold text-text">{value}</p>
  </div>
);

const TrafficSourceItem: React.FC<{
  source: string;
  visitors: string;
  percentage: number;
  color: string;
}> = ({ source, visitors, percentage, color }) => (
  <div className="flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-secondary-50 dark:hover:bg-secondary-700">
    <div className="flex items-center gap-3">
      <div className={`h-3 w-3 rounded-full ${color}`}></div>
      <div>
        <p className="text-sm font-medium text-text">{source}</p>
        <p className="text-xs text-text-muted">{visitors} visitors</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium text-text">{percentage}%</p>
      <div className="relative mt-1 h-2 w-16 rounded-full bg-secondary-200 dark:bg-secondary-600">
        <div
          className={`h-full ${color} absolute left-0 top-0 rounded-full`}
          data-width={`${percentage}%`}
        ></div>
      </div>
    </div>
  </div>
);

export const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Page Views',
      value: '127,543',
      change: '+12.5%',
      trend: 'up' as const,
      icon: '👁️',
      color: 'bg-blue-500',
    },
    {
      title: 'Unique Visitors',
      value: '23,847',
      change: '+8.2%',
      trend: 'up' as const,
      icon: '👥',
      color: 'bg-green-500',
    },
    {
      title: 'Click Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down' as const,
      icon: '👆',
      /* eslint-disable-next-line no-raw-primary-class/no-raw-primary-class */
      color: 'bg-primary-500',
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+15.3%',
      trend: 'up' as const,
      icon: '⏱️',
      color: 'bg-orange-500',
    },
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: '45,231', percentage: 45, color: 'bg-blue-500' },
    { source: 'Direct Traffic', visitors: '28,847', percentage: 28, color: 'bg-green-500' },
    /* eslint-disable-next-line no-raw-primary-class/no-raw-primary-class */
    { source: 'Social Media', visitors: '15,429', percentage: 15, color: 'bg-primary-500' },
    { source: 'Email Campaign', visitors: '8,934', percentage: 9, color: 'bg-orange-500' },
    { source: 'Referrals', visitors: '3,102', percentage: 3, color: 'bg-pink-500' },
  ];

  const topPages = [
    { page: '/dashboard', views: '23,847', uniqueViews: '18,234', bounceRate: '23.4%' },
    { page: '/analytics', views: '18,234', uniqueViews: '15,923', bounceRate: '18.7%' },
    { page: '/users', views: '12,456', uniqueViews: '9,834', bounceRate: '31.2%' },
    { page: '/settings', views: '8,945', uniqueViews: '7,123', bounceRate: '28.9%' },
    { page: '/profile', views: '6,234', uniqueViews: '5,456', bounceRate: '15.3%' },
  ];

  return (
    <DashboardLayout
      pageTitle="Analytics"
      pageDescription="Monitor your website performance and user engagement."
      headerActions={
        <select
          value={timeRange}
          onChange={e => setTimeRange(e.target.value)}
          className="focus:ring-brand rounded-lg border border-secondary-300 bg-white px-3 py-2 text-sm text-secondary-900 focus:border-transparent focus:ring-2 dark:border-secondary-600 dark:bg-secondary-700 dark:text-secondary-100"
          aria-label="Select time range"
          title="Select time range"
        >
          <option value="1d">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      }
    >
      {/* Key Metrics */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            icon={metric.icon}
            color={metric.color}
          />
        ))}
      </div>

      {/* Charts and Data */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Traffic Trend Chart */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Traffic Trend
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                <span className="text-gray-600 dark:text-gray-400">Page Views</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-gray-600 dark:text-gray-400">Unique Visitors</span>
              </div>
            </div>
          </div>
          <div className="flex h-64 items-end justify-between gap-1">
            {/* Traffic chart representation */}
            {[
              { views: 'h-32', visitors: 'h-24' },
              { views: 'h-40', visitors: 'h-32' },
              { views: 'h-28', visitors: 'h-20' },
              { views: 'h-48', visitors: 'h-36' },
              { views: 'h-56', visitors: 'h-44' },
              { views: 'h-36', visitors: 'h-28' },
              { views: 'h-52', visitors: 'h-40' },
              { views: 'h-60', visitors: 'h-48' },
              { views: 'h-44', visitors: 'h-36' },
              { views: 'h-40', visitors: 'h-32' },
              { views: 'h-56', visitors: 'h-44' },
              { views: 'h-64', visitors: 'h-52' },
            ].map((bar, index) => (
              <div key={index} className="flex flex-1 items-end gap-1">
                <div
                  className={`w-full rounded-t-sm bg-blue-500 ${bar.views} transition-all duration-300 hover:bg-blue-600`}
                ></div>
                <div
                  className={`w-full rounded-t-sm bg-green-500 ${bar.visitors} transition-all duration-300 hover:bg-green-600`}
                ></div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Real-time</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-green-600 dark:text-green-400">847</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Top Active Page</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">/dashboard</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Active Sessions</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Page Views/min</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources and Top Pages */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Traffic Sources */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Traffic Sources
          </h3>
          <div className="space-y-2">
            {trafficSources.map((source, index) => (
              <TrafficSourceItem
                key={index}
                source={source.source}
                visitors={source.visitors}
                percentage={source.percentage}
                color={source.color}
              />
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Bounce Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {topPages.map((page, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {page.page}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {page.uniqueViews} unique
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                      {page.views}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                      {page.bounceRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
