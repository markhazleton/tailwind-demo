import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

// Icons (using Unicode symbols for simplicity - in a real app you'd use a proper icon library)
const IconArrowUp = () => <span className="text-green-500">↗</span>;
const IconArrowDown = () => <span className="text-red-500">↘</span>;

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  isLoading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        <div className="flex items-center gap-1">
          {trend === 'up' ? <IconArrowUp /> : <IconArrowDown />}
          <span className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

interface Transaction {
  id: string;
  customer: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {transaction.customer.charAt(0).toUpperCase()}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{transaction.customer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">ID: {transaction.id}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{transaction.amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[transaction.status]}`}>
          {transaction.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{transaction.date}</td>
    </tr>
  );
};

const ActivityItem: React.FC<{ activity: { user: string; action: string; time: string } }> = ({ activity }) => (
  <div className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
      {activity.user.charAt(0).toUpperCase()}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-900 dark:text-gray-100">
        <span className="font-medium">{activity.user}</span> {activity.action}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
    </div>
  </div>
);

export const DashboardPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    { title: 'Total Revenue', value: '$847,291', change: '+12.5%', trend: 'up' as const },
    { title: 'Active Users', value: '23,847', change: '+8.2%', trend: 'up' as const },
    { title: 'Conversion Rate', value: '3.24%', change: '-2.1%', trend: 'down' as const },
    { title: 'Monthly Growth', value: '18.9%', change: '+5.4%', trend: 'up' as const },
  ];

  const transactions: Transaction[] = [
    { id: 'TXN-001', customer: 'Alice Johnson', amount: '$2,450.00', status: 'completed', date: '2024-01-15' },
    { id: 'TXN-002', customer: 'Bob Smith', amount: '$1,250.00', status: 'pending', date: '2024-01-15' },
    { id: 'TXN-003', customer: 'Carol Davis', amount: '$3,750.00', status: 'completed', date: '2024-01-14' },
    { id: 'TXN-004', customer: 'David Wilson', amount: '$890.00', status: 'failed', date: '2024-01-14' },
    { id: 'TXN-005', customer: 'Emma Brown', amount: '$5,200.00', status: 'completed', date: '2024-01-13' },
  ];

  const activities = [
    { user: 'John Doe', action: 'created a new campaign', time: '2 minutes ago' },
    { user: 'Jane Smith', action: 'updated user profile', time: '5 minutes ago' },
    { user: 'Mike Johnson', action: 'completed onboarding', time: '10 minutes ago' },
    { user: 'Sarah Wilson', action: 'upgraded to Pro plan', time: '15 minutes ago' },
    { user: 'Tom Davis', action: 'exported analytics report', time: '20 minutes ago' },
  ];

  const users = [
    { name: 'Alex Chen', role: 'Admin', status: 'online' },
    { name: 'Maria Garcia', role: 'Editor', status: 'away' },
    { name: 'James Liu', role: 'Viewer', status: 'offline' },
    { name: 'Emily Taylor', role: 'Admin', status: 'online' },
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const headerActions = (
    <button
      onClick={handleRefresh}
      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200"
      disabled={isLoading}
    >
      {isLoading ? 'Refreshing...' : 'Refresh Data'}
    </button>
  );

  return (
    <DashboardLayout 
      pageTitle="Dashboard" 
      pageDescription="Welcome back, John! Here's what's happening with PromptSpark today."
      headerActions={headerActions}
    >
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              isLoading={isLoading}
            />
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Revenue Trend</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">This Month</span>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {/* Simple bar chart representation */}
              {[
                { height: 'h-40', percent: '65%' },
                { height: 'h-52', percent: '85%' },
                { height: 'h-28', percent: '45%' },
                { height: 'h-48', percent: '75%' },
                { height: 'h-56', percent: '90%' },
                { height: 'h-32', percent: '55%' },
                { height: 'h-48', percent: '80%' },
                { height: 'h-60', percent: '95%' },
                { height: 'h-44', percent: '70%' },
                { height: 'h-36', percent: '60%' },
                { height: 'h-52', percent: '85%' },
                { height: 'h-64', percent: '100%' }
              ].map((bar, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm flex-1 transition-all duration-300 hover:from-purple-600 hover:to-purple-500 ${bar.height}`}
                  title={bar.percent}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Today's Revenue</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">$12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">New Signups</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">1,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">2.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {transactions.map((transaction) => (
                  <TransactionRow key={transaction.id} transaction={transaction} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed + User List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Feed */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h3>
            <div className="space-y-1">
              {activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
              ))}
            </div>
          </div>

          {/* User List */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Team Members</h3>
            <div className="space-y-3">
              {users.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.split(' ').map(n => n.charAt(0)).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      user.status === 'online' 
                        ? 'bg-green-500' 
                        : user.status === 'away' 
                        ? 'bg-yellow-500' 
                        : 'bg-gray-400'
                    }`}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
