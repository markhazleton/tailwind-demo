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
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white text-xl`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${
        trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
  </div>
);

const TrafficSourceItem: React.FC<{ source: string; visitors: string; percentage: number; color: string }> = ({ source, visitors, percentage, color }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{source}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{visitors} visitors</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{percentage}%</p>
      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-1 relative">
        <div 
          className={`h-full ${color} rounded-full absolute top-0 left-0`}
          data-width={`${percentage}%`}
        ></div>
      </div>
    </div>
  </div>
);

export const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    { title: 'Page Views', value: '127,543', change: '+12.5%', trend: 'up' as const, icon: '👁️', color: 'bg-blue-500' },
    { title: 'Unique Visitors', value: '23,847', change: '+8.2%', trend: 'up' as const, icon: '👥', color: 'bg-green-500' },
    { title: 'Click Rate', value: '3.24%', change: '-2.1%', trend: 'down' as const, icon: '👆', color: 'bg-purple-500' },
    { title: 'Avg. Session', value: '4m 32s', change: '+15.3%', trend: 'up' as const, icon: '⏱️', color: 'bg-orange-500' },
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: '45,231', percentage: 45, color: 'bg-blue-500' },
    { source: 'Direct Traffic', visitors: '28,847', percentage: 28, color: 'bg-green-500' },
    { source: 'Social Media', visitors: '15,429', percentage: 15, color: 'bg-purple-500' },
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
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Traffic Trend Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Traffic Trend</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">Page Views</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">Unique Visitors</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-1">
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
              { views: 'h-64', visitors: 'h-52' }
            ].map((bar, index) => (
              <div key={index} className="flex items-end gap-1 flex-1">
                <div className={`bg-blue-500 rounded-t-sm w-full ${bar.views} transition-all duration-300 hover:bg-blue-600`}></div>
                <div className={`bg-green-500 rounded-t-sm w-full ${bar.visitors} transition-all duration-300 hover:bg-green-600`}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Real-time</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">847</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Top Active Page</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">/dashboard</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Active Sessions</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Page Views/min</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources and Top Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Traffic Sources</h3>
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Page</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bounce Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {topPages.map((page, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{page.page}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{page.uniqueViews} unique</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{page.views}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{page.bounceRate}</td>
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
