import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

// Icons used in the component
const IconMore = () => <span>⋯</span>;
const IconEdit = () => <span>✏️</span>;
const IconDelete = () => <span>🗑️</span>;

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer' | 'Manager';
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  avatar: string;
  signupDate: string;
}

const UserRow: React.FC<{ user: User; onEdit: (user: User) => void; onDelete: (user: User) => void }> = ({ user, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };

  const roleColors = {
    Admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    Manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    Editor: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
    Viewer: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-700 rounded-full flex items-center justify-center text-white font-medium">
            {user.name.split(' ').map(n => n.charAt(0)).join('')}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${roleColors[user.role]}`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[user.status]}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.lastActive}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.signupDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="User actions"
            title="User actions"
          >
            <IconMore />
          </button>
          {showActions && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="py-1">
                <button
                  onClick={() => {
                    onEdit(user);
                    setShowActions(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors"
                >
                  <IconEdit /> Edit User
                </button>
                <button
                  onClick={() => {
                    onDelete(user);
                    setShowActions(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left transition-colors"
                >
                  <IconDelete /> Delete User
                </button>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@promptspark.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2 minutes ago',
      avatar: 'JD',
      signupDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@promptspark.com',
      role: 'Manager',
      status: 'active',
      lastActive: '1 hour ago',
      avatar: 'JS',
      signupDate: '2024-01-12'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@promptspark.com',
      role: 'Editor',
      status: 'inactive',
      lastActive: '2 days ago',
      avatar: 'MJ',
      signupDate: '2024-01-10'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah@promptspark.com',
      role: 'Viewer',
      status: 'active',
      lastActive: '5 minutes ago',
      avatar: 'SW',
      signupDate: '2024-01-08'
    },
    {
      id: '5',
      name: 'Alex Chen',
      email: 'alex@promptspark.com',
      role: 'Editor',
      status: 'pending',
      lastActive: 'Never',
      avatar: 'AC',
      signupDate: '2024-01-20'
    },
    {
      id: '6',
      name: 'Emily Davis',
      email: 'emily@promptspark.com',
      role: 'Manager',
      status: 'active',
      lastActive: '30 minutes ago',
      avatar: 'ED',
      signupDate: '2024-01-05'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
    // In a real app, you'd open a modal or navigate to edit page
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
    // In a real app, you'd show a confirmation dialog
  };

  const handleInviteUser = () => {
    console.log('Invite new user');
    // In a real app, you'd open an invite modal
  };

  return (
    <DashboardLayout 
      pageTitle="Users"
      pageDescription="Manage team members and their access permissions."
      headerActions={
        <button
          onClick={handleInviteUser}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Invite User
        </button>
      }
    >
      {/* Filters */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Users
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Role
            </label>
            <select
              id="role-filter"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>

          <div>
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter by Status
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Team Members
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredUsers.length} of {users.length} users
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Joined
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onEdit={handleEditUser}
                  onDelete={handleDeleteUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

