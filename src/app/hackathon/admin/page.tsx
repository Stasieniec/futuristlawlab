'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllTeams, toggleTeamLock, lockAllTeams, deleteTeam, addTeamMember, removeTeamMember } from '@/lib/firestore/teams';
import { isEmailRegistered } from '@/lib/firestore/participants';
import { getAllFeedback, deleteFeedback, type HackathonFeedback } from '@/lib/firestore/feedback';
import { getAllSubmissions, deleteSubmission, type ProjectSubmission } from '@/lib/firestore/submissions';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';

type AdminTab = 'teams' | 'feedback' | 'submissions';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('teams');
  const [teams, setTeams] = useState<Team[]>([]);
  const [feedback, setFeedback] = useState<HackathonFeedback[]>([]);
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [submissionsLoading, setSubmissionsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);
  const [expandedFeedback, setExpandedFeedback] = useState<string | null>(null);
  const [expandedSubmission, setExpandedSubmission] = useState<string | null>(null);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [addMemberLoading, setAddMemberLoading] = useState(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'hackathon2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadTeams();
      loadFeedback();
      loadSubmissions();
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

  const loadFeedback = async () => {
    setFeedbackLoading(true);
    try {
      const allFeedback = await getAllFeedback();
      setFeedback(allFeedback);
    } catch (err) {
      console.error('Error loading feedback:', err);
    } finally {
      setFeedbackLoading(false);
    }
  };

  const loadSubmissions = async () => {
    setSubmissionsLoading(true);
    try {
      const allSubmissions = await getAllSubmissions();
      setSubmissions(allSubmissions);
    } catch (err) {
      console.error('Error loading submissions:', err);
    } finally {
      setSubmissionsLoading(false);
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

  const handleAddMember = async (teamId: string) => {
    if (!newMemberName.trim() || !newMemberEmail.trim()) {
      setError('Please enter both name and email for the new member');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newMemberEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setAddMemberLoading(true);
    setError('');
    setSuccess('');

    try {
      // Check if email is registered
      const registered = await isEmailRegistered(newMemberEmail.trim());
      if (!registered) {
        setError(`${newMemberEmail} is not registered for the hackathon on Luma`);
        setAddMemberLoading(false);
        return;
      }

      await addTeamMember(teamId, {
        name: newMemberName.trim(),
        email: newMemberEmail.trim(),
        role: 'Member',
      });
      await loadTeams();
      setNewMemberName('');
      setNewMemberEmail('');
      setSuccess('Member added successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error adding member:', err);
      setError(err instanceof Error ? err.message : 'Failed to add member');
    } finally {
      setAddMemberLoading(false);
    }
  };

  const handleRemoveMember = async (teamId: string, memberId: string, memberName: string, isTeamLead: boolean) => {
    if (isTeamLead) {
      setError('Cannot remove the team lead. Delete the team instead.');
      return;
    }

    if (!confirm(`Are you sure you want to remove ${memberName} from the team?`)) {
      return;
    }

    setActionLoading(`remove-${memberId}`);
    setError('');
    setSuccess('');

    try {
      await removeTeamMember(teamId, memberId);
      await loadTeams();
      setSuccess('Member removed successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error removing member:', err);
      setError('Failed to remove member');
    } finally {
      setActionLoading(null);
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Team Name', 'Challenge', 'Team Lead', 'Team Lead Email', 'Members Count', 'Status', 'Created At', 'All Members'],
      ...teams.map(team => {
        const challengeName = CHALLENGES.find(c => c.id === team.challenge)?.name || 'Not selected';
        return [
          team.teamName,
          challengeName,
          team.members.find(m => m.role === 'Team Lead')?.name || '',
          team.createdBy,
          team.members.length.toString(),
          team.locked ? 'Locked' : 'Active',
          new Date(team.createdAt).toLocaleDateString(),
          team.members.map(m => `${m.name} (${m.email})`).join('; ')
        ];
      })
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

  const exportFeedbackToCSV = () => {
    const csvContent = [
      ['Email', 'Name', 'How Found Out', 'Overall Experience', 'Enjoyed Most', 'Improvements', 'Mentorship Rating', 'Mentorship Feedback', 'Resources Rating', 'Resources Feedback', 'Logistics Rating', 'Logistics Feedback', 'Networking Rating', 'Most Valuable Learning', 'Would Participate Again', 'Additional Comments', 'Submitted At'],
      ...feedback.map(f => [
        f.email,
        f.name,
        f.howFoundOut + (f.howFoundOutOther ? ` (${f.howFoundOutOther})` : ''),
        f.overallExperience.toString(),
        f.enjoyedMost,
        f.improvements,
        f.mentorshipRating.toString(),
        f.mentorshipFeedback || '',
        f.resourcesRating.toString(),
        f.resourcesFeedback || '',
        f.logisticsRating.toString(),
        f.logisticsFeedback || '',
        f.networkingRating.toString(),
        f.mostValuableLearning,
        f.wouldParticipateAgain,
        f.additionalComments || '',
        f.submittedAt ? new Date(f.submittedAt).toLocaleString() : ''
      ])
    ];

    const csvString = csvContent.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hackathon-feedback-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getAverageRating = (key: keyof HackathonFeedback) => {
    if (feedback.length === 0) return 0;
    const sum = feedback.reduce((acc, f) => acc + (Number(f[key]) || 0), 0);
    return (sum / feedback.length).toFixed(1);
  };

  const handleDeleteFeedback = async (email: string, name: string) => {
    if (!confirm(`Are you sure you want to delete feedback from "${name}"? This action cannot be undone.`)) {
      return;
    }

    setActionLoading(`feedback-${email}`);
    setError('');
    setSuccess('');

    try {
      await deleteFeedback(email);
      await loadFeedback();
      setSuccess('Feedback deleted successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error deleting feedback:', err);
      setError('Failed to delete feedback');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeleteSubmission = async (teamId: string, teamName: string) => {
    if (!confirm(`Are you sure you want to delete the submission from "${teamName}"? This action cannot be undone.`)) {
      return;
    }

    setActionLoading(`submission-${teamId}`);
    setError('');
    setSuccess('');

    try {
      await deleteSubmission(teamId);
      await loadSubmissions();
      setSuccess('Submission deleted successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error deleting submission:', err);
      setError('Failed to delete submission');
    } finally {
      setActionLoading(null);
    }
  };

  const exportSubmissionsToCSV = () => {
    const csvContent = [
      ['Team Name', 'Challenge', 'Project Name', 'Description', 'GitHub URL', 'Deployed URL', 'Slides', 'Video', 'Team Lead Email', 'Submitted At'],
      ...submissions.map(s => [
        s.teamName,
        s.challenge,
        s.projectName,
        s.projectDescription,
        s.githubUrl || '',
        s.deployedUrl || '',
        s.slidesUrl ? 'Yes' : 'No',
        s.demoVideoUrl ? 'Yes' : 'No',
        s.teamLeadEmail,
        s.submittedAt ? new Date(s.submittedAt).toLocaleString() : ''
      ])
    ];

    const csvString = csvContent.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hackathon-submissions-${new Date().toISOString().split('T')[0]}.csv`;
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
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-900">Manage hackathon teams, view feedback, and export data</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-8">
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-6 py-3 font-medium text-sm transition ${
                activeTab === 'teams'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Teams ({teams.length})
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`px-6 py-3 font-medium text-sm transition ${
                activeTab === 'feedback'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Feedback ({feedback.length})
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-6 py-3 font-medium text-sm transition ${
                activeTab === 'submissions'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Submissions ({submissions.length})
            </button>
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

          {/* Teams Tab Content */}
          {activeTab === 'teams' && (
            <>
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
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Challenge</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Team Lead</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Members</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Created</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {teams.map((team) => {
                      const challengeName = CHALLENGES.find(c => c.id === team.challenge)?.name || 'Not selected';
                      const isExpanded = expandedTeam === team.id;
                      return (
                        <Fragment key={team.id}>
                          <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    setExpandedTeam(isExpanded ? null : team.id);
                                    setNewMemberName('');
                                    setNewMemberEmail('');
                                  }}
                                  className="text-slate-400 hover:text-slate-600 transition"
                                >
                                  <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                </button>
                                <div className="font-semibold text-slate-900">{team.teamName}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                {challengeName}
                              </span>
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
                          {/* Expanded Row for Member Management */}
                          {isExpanded && (
                            <tr className="bg-slate-50">
                              <td colSpan={7} className="px-6 py-4">
                                <div className="ml-7">
                                  <h4 className="font-semibold text-slate-900 mb-4">Team Members</h4>

                                  {/* Members List */}
                                  <div className="space-y-2 mb-6">
                                    {team.members.map((member) => (
                                      <div key={member.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                                        <div className="flex items-center gap-3">
                                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${member.role === 'Team Lead' ? 'bg-blue-100' : 'bg-slate-100'}`}>
                                            {member.role === 'Team Lead' ? (
                                              <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                              </svg>
                                            ) : (
                                              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                              </svg>
                                            )}
                                          </div>
                                          <div>
                                            <div className="font-medium text-slate-900">{member.name}</div>
                                            <div className="text-sm text-slate-500">{member.email}</div>
                                          </div>
                                          {member.role === 'Team Lead' && (
                                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                              Team Lead
                                            </span>
                                          )}
                                        </div>
                                        <button
                                          onClick={() => handleRemoveMember(team.id, member.id, member.name, member.role === 'Team Lead')}
                                          disabled={actionLoading === `remove-${member.id}` || member.role === 'Team Lead'}
                                          className="px-3 py-1.5 text-red-600 hover:bg-red-50 font-medium rounded transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                          title={member.role === 'Team Lead' ? 'Cannot remove team lead' : 'Remove member'}
                                        >
                                          {actionLoading === `remove-${member.id}` ? '...' : 'Remove'}
                                        </button>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Add Member Form */}
                                  {team.members.length < team.maxMembers && (
                                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                                      <h5 className="font-medium text-slate-900 mb-3">Add New Member</h5>
                                      <div className="flex flex-wrap gap-3">
                                        <input
                                          type="text"
                                          placeholder="Name"
                                          value={newMemberName}
                                          onChange={(e) => setNewMemberName(e.target.value)}
                                          className="flex-1 min-w-[150px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 text-slate-900"
                                          disabled={addMemberLoading}
                                        />
                                        <input
                                          type="email"
                                          placeholder="Email"
                                          value={newMemberEmail}
                                          onChange={(e) => setNewMemberEmail(e.target.value)}
                                          className="flex-1 min-w-[200px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 text-slate-900"
                                          disabled={addMemberLoading}
                                        />
                                        <button
                                          onClick={() => handleAddMember(team.id)}
                                          disabled={addMemberLoading || !newMemberName.trim() || !newMemberEmail.trim()}
                                          className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                                        >
                                          {addMemberLoading ? 'Adding...' : 'Add Member'}
                                        </button>
                                      </div>
                                      <p className="text-xs text-slate-500 mt-2">
                                        Note: The email must be registered on Luma for the hackathon.
                                      </p>
                                    </div>
                                  )}
                                  {team.members.length >= team.maxMembers && (
                                    <p className="text-sm text-amber-600 font-medium">
                                      This team is full ({team.maxMembers} members maximum).
                                    </p>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
            </>
          )}

          {/* Feedback Tab Content */}
          {activeTab === 'feedback' && (
            <>
              {/* Feedback Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">Total Responses</p>
                  <p className="text-3xl font-bold text-slate-900">{feedback.length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">Avg Overall Experience</p>
                  <p className="text-3xl font-bold text-blue-700">{getAverageRating('overallExperience')}/5</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">Avg Mentorship</p>
                  <p className="text-3xl font-bold text-blue-700">{getAverageRating('mentorshipRating')}/5</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">Would Participate Again</p>
                  <p className="text-3xl font-bold text-green-600">
                    {feedback.length > 0 ? Math.round((feedback.filter(f => f.wouldParticipateAgain === 'yes').length / feedback.length) * 100) : 0}%
                  </p>
                </div>
              </div>

              {/* Feedback Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={loadFeedback}
                  disabled={feedbackLoading}
                  className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                >
                  {feedbackLoading ? 'Refreshing...' : 'Refresh Feedback'}
                </button>
                <button
                  onClick={exportFeedbackToCSV}
                  disabled={feedback.length === 0}
                  className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition disabled:opacity-50"
                >
                  Export to CSV
                </button>
              </div>

              {/* Feedback Table */}
              {feedbackLoading ? (
                <div className="text-center py-12">
                  <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-slate-900 mt-4">Loading feedback...</p>
                </div>
              ) : feedback.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-xl">
                  <p className="text-slate-900 text-lg">No feedback submitted yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {feedback.map((f) => {
                    const isExpanded = expandedFeedback === f.email;
                    return (
                      <div key={f.email} className="bg-white rounded-xl shadow-sm border-2 border-slate-200 overflow-hidden">
                        {/* Summary Row */}
                        <button
                          onClick={() => setExpandedFeedback(isExpanded ? null : f.email)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <svg className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                              <div className="text-left">
                                <div className="font-semibold text-slate-900">{f.name}</div>
                                <div className="text-sm text-slate-500">{f.email}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-5 h-5 ${star <= f.overallExperience ? 'text-yellow-400' : 'text-slate-200'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              f.wouldParticipateAgain === 'yes' ? 'bg-green-100 text-green-700' :
                              f.wouldParticipateAgain === 'maybe' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {f.wouldParticipateAgain === 'yes' ? 'Would return' :
                               f.wouldParticipateAgain === 'maybe' ? 'Maybe' : 'Would not return'}
                            </span>
                            <span className="text-sm text-slate-500">
                              {f.submittedAt ? new Date(f.submittedAt).toLocaleDateString() : ''}
                            </span>
                          </div>
                        </button>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Left Column */}
                              <div className="space-y-4">
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">How did you find out about the hackathon?</h4>
                                  <p className="text-slate-900">{f.howFoundOut}{f.howFoundOutOther ? ` - ${f.howFoundOutOther}` : ''}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">What did you enjoy most?</h4>
                                  <p className="text-slate-900">{f.enjoyedMost}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">What could be improved?</h4>
                                  <p className="text-slate-900">{f.improvements}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Most valuable learning</h4>
                                  <p className="text-slate-900">{f.mostValuableLearning}</p>
                                </div>
                                {f.additionalComments && (
                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-700 mb-1">Additional Comments</h4>
                                    <p className="text-slate-900">{f.additionalComments}</p>
                                  </div>
                                )}
                              </div>

                              {/* Right Column - Ratings */}
                              <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Ratings</h4>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-600">Mentorship</span>
                                      <span className="font-semibold text-slate-900">{f.mentorshipRating}/5</span>
                                    </div>
                                    {f.mentorshipFeedback && (
                                      <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.mentorshipFeedback}</p>
                                    )}
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-600">Resources & Support</span>
                                      <span className="font-semibold text-slate-900">{f.resourcesRating}/5</span>
                                    </div>
                                    {f.resourcesFeedback && (
                                      <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.resourcesFeedback}</p>
                                    )}
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-600">Logistics & Organisation</span>
                                      <span className="font-semibold text-slate-900">{f.logisticsRating}/5</span>
                                    </div>
                                    {f.logisticsFeedback && (
                                      <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.logisticsFeedback}</p>
                                    )}
                                    <div className="flex justify-between items-center">
                                      <span className="text-slate-600">Networking</span>
                                      <span className="font-semibold text-slate-900">{f.networkingRating}/5</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Delete Action */}
                            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                              <button
                                onClick={() => handleDeleteFeedback(f.email, f.name)}
                                disabled={actionLoading === `feedback-${f.email}`}
                                className="px-4 py-2 text-red-600 hover:bg-red-50 font-medium rounded-lg transition text-sm disabled:opacity-50 flex items-center gap-2"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                </svg>
                                {actionLoading === `feedback-${f.email}` ? 'Deleting...' : 'Delete Feedback'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Submissions Tab Content */}
          {activeTab === 'submissions' && (
            <>
              {/* Submissions Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">Total Submissions</p>
                  <p className="text-3xl font-bold text-slate-900">{submissions.length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">With GitHub Link</p>
                  <p className="text-3xl font-bold text-blue-700">{submissions.filter(s => s.githubUrl).length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-900 font-medium mb-1">With Demo Video</p>
                  <p className="text-3xl font-bold text-purple-700">{submissions.filter(s => s.demoVideoUrl).length}</p>
                </div>
              </div>

              {/* Submissions Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={loadSubmissions}
                  disabled={submissionsLoading}
                  className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                >
                  {submissionsLoading ? 'Refreshing...' : 'Refresh Submissions'}
                </button>
                <button
                  onClick={exportSubmissionsToCSV}
                  disabled={submissions.length === 0}
                  className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition disabled:opacity-50"
                >
                  Export to CSV
                </button>
              </div>

              {/* Submissions List */}
              {submissionsLoading ? (
                <div className="text-center py-12">
                  <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-slate-900 mt-4">Loading submissions...</p>
                </div>
              ) : submissions.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-xl">
                  <p className="text-slate-900 text-lg">No submissions yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {submissions.map((s) => {
                    const isExpanded = expandedSubmission === s.teamId;
                    return (
                      <div key={s.teamId} className="bg-white rounded-xl shadow-sm border-2 border-slate-200 overflow-hidden">
                        {/* Summary Row */}
                        <button
                          onClick={() => setExpandedSubmission(isExpanded ? null : s.teamId)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <svg className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                              <div className="text-left">
                                <div className="font-semibold text-slate-900">{s.teamName}</div>
                                <div className="text-sm text-slate-500">{s.projectName}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                              {s.challenge}
                            </span>
                            <div className="flex items-center gap-2">
                              {s.githubUrl && (
                                <span className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center" title="GitHub">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                </span>
                              )}
                              {s.deployedUrl && (
                                <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center" title="Deployed">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              )}
                              {s.slidesUrl && (
                                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center" title="Slides">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              )}
                              {s.demoVideoUrl && (
                                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center" title="Video">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                  </svg>
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-slate-500">
                              {s.submittedAt ? new Date(s.submittedAt).toLocaleDateString() : ''}
                            </span>
                          </div>
                        </button>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Left Column */}
                              <div className="space-y-4">
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Project Name</h4>
                                  <p className="text-slate-900">{s.projectName}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Description</h4>
                                  <p className="text-slate-900 whitespace-pre-wrap">{s.projectDescription}</p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Team Lead</h4>
                                  <p className="text-slate-900">{s.teamLeadEmail}</p>
                                </div>
                              </div>

                              {/* Right Column - Links */}
                              <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Resources</h4>
                                  <div className="space-y-3">
                                    {s.githubUrl && (
                                      <a href={s.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub Repository
                                      </a>
                                    )}
                                    {s.deployedUrl && (
                                      <a href={s.deployedUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 hover:text-green-800">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                                        </svg>
                                        Deployed Website
                                      </a>
                                    )}
                                    {s.slidesUrl && (
                                      <a href={s.slidesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                        </svg>
                                        Presentation Slides ({s.slidesFileName})
                                      </a>
                                    )}
                                    {s.demoVideoUrl && (
                                      <a href={s.demoVideoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                        </svg>
                                        Demo Video ({s.demoVideoFileName})
                                      </a>
                                    )}
                                    {!s.githubUrl && !s.deployedUrl && !s.slidesUrl && !s.demoVideoUrl && (
                                      <p className="text-slate-500 text-sm">No resources uploaded</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Delete Action */}
                            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                              <button
                                onClick={() => handleDeleteSubmission(s.teamId, s.teamName)}
                                disabled={actionLoading === `submission-${s.teamId}`}
                                className="px-4 py-2 text-red-600 hover:bg-red-50 font-medium rounded-lg transition text-sm disabled:opacity-50 flex items-center gap-2"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                </svg>
                                {actionLoading === `submission-${s.teamId}` ? 'Deleting...' : 'Delete Submission'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
