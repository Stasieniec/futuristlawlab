'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllTeams, toggleTeamLock, lockAllTeams, deleteTeam } from '@/lib/firestore/teams';
import type { Team } from '@/types/team';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hackathon2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadTeams();
    } else {
      setError('Incorrect password');
    }
  };

  const loadTeams = async () => {
    setLoading(true);
    setError('');
    try {
      const allTeams = await getAllTeams();
      setTeams(allTeams);
    } catch (err) {
      console.error('Error loading teams:', err);
      setError('Failed to load teams');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleLock = async (teamId: string, currentLockStatus: boolean) => {
    setActionLoading(teamId);
    setError('');
    setSuccess('');

    try {
      await toggleTeamLock(teamId, !currentLockStatus);
      await loadTeams(); // Reload teams
      setSuccess(`Team ${!currentLockStatus ? 'locked' : 'unlocked'} successfully`);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error toggling lock:', err);
      setError('Failed to update lock status');
    } finally {
      setActionLoading(null);
    }
  };

  const handleLockAll = async () => {
    if (!confirm('Are you sure you want to lock ALL teams? This will prevent all team edits.')) {
      return;
    }

    setActionLoading('lock-all');
    setError('');
    setSuccess('');

    try {
      await lockAllTeams();
      await loadTeams();
      setSuccess('All teams locked successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error locking all teams:', err);
      setError('Failed to lock all teams');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeleteTeam = async (teamId: string, teamName: string) => {
    if (!confirm(`Are you sure you want to delete team "${teamName}"? This action cannot be undone.`)) {
      return;
    }

    setActionLoading(teamId);
    setError('');
    setSuccess('');

    try {
      await deleteTeam(teamId);
      await loadTeams();
      setSuccess('Team deleted successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error deleting team:', err);
      setError('Failed to delete team');
    } finally {
      setActionLoading(null);
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Team Name', 'Team Lead', 'Team Lead Email', 'Members Count', 'Status', 'Created At', 'All Members'],
      ...teams.map(team => [
        team.teamName,
        team.members.find(m => m.role === 'Team Lead')?.name || '',
        team.createdBy,
        team.members.length.toString(),
        team.locked ? 'Locked' : 'Active',
        new Date(team.createdAt).toLocaleDateString(),
        team.members.map(m => `${m.name} (${m.email})`).join('; ')
      ])
    ];

    const csvString = csvContent.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hackathon-teams-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Access</h1>
              <p className="text-slate-900">Enter password to manage teams</p>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="password" className="block text-slate-900 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Access Admin Panel
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/hackathon" className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                ← Back to Hackathon Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src="/images/logo.jpeg"
                  alt="Futurist Law Lab Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="font-bold text-2xl text-blue-700">Admin Panel</div>
            </Link>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 text-slate-900 hover:bg-slate-100 font-medium rounded-lg transition"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Team Management</h1>
            <p className="text-slate-900">Manage hackathon teams, lock registrations, and export data</p>
          </div>

          {/* Messages */}
          {success && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p className="text-green-700 text-sm font-medium">{success}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                </svg>
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Stats & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <p className="text-sm text-slate-900 font-medium mb-1">Total Teams</p>
              <p className="text-3xl font-bold text-slate-900">{teams.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <p className="text-sm text-slate-900 font-medium mb-1">Locked Teams</p>
              <p className="text-3xl font-bold text-slate-900">{teams.filter(t => t.locked).length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <p className="text-sm text-slate-900 font-medium mb-1">Total Participants</p>
              <p className="text-3xl font-bold text-slate-900">{teams.reduce((sum, t) => sum + t.members.length, 0)}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={loadTeams}
              disabled={loading}
              className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button
              onClick={handleLockAll}
              disabled={actionLoading === 'lock-all'}
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition disabled:opacity-50"
            >
              {actionLoading === 'lock-all' ? 'Locking...' : 'Lock All Teams'}
            </button>
            <button
              onClick={exportToCSV}
              className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Export to CSV
            </button>
          </div>

          {/* Teams Table */}
          {loading ? (
            <div className="text-center py-12">
              <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-slate-900 mt-4">Loading teams...</p>
            </div>
          ) : teams.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-900 text-lg">No teams registered yet</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100 border-b-2 border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Team Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Team Lead</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Members</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Created</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {teams.map((team) => (
                      <tr key={team.id} className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-900">{team.teamName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-900">{team.members.find(m => m.role === 'Team Lead')?.name || 'N/A'}</div>
                          <div className="text-sm text-slate-900">{team.createdBy}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-900">{team.members.length} / {team.maxMembers}</div>
                          <div className="text-sm text-slate-900">{team.members.map(m => m.name).join(', ')}</div>
                        </td>
                        <td className="px-6 py-4">
                          {team.locked ? (
                            <span className="inline-flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                              </svg>
                              Locked
                            </span>
                          ) : (
                            <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-900">
                          {new Date(team.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleToggleLock(team.id, team.locked)}
                              disabled={actionLoading === team.id}
                              className="px-3 py-1.5 text-blue-700 hover:bg-blue-50 font-medium rounded transition text-sm disabled:opacity-50"
                            >
                              {actionLoading === team.id ? '...' : team.locked ? 'Unlock' : 'Lock'}
                            </button>
                            <button
                              onClick={() => handleDeleteTeam(team.id, team.teamName)}
                              disabled={actionLoading === team.id}
                              className="px-3 py-1.5 text-red-600 hover:bg-red-50 font-medium rounded transition text-sm disabled:opacity-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
