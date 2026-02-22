'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllTeams, toggleTeamLock, lockAllTeams, deleteTeam, addTeamMember, removeTeamMember } from '@/lib/firestore/teams';
import { isEmailRegistered } from '@/lib/firestore/participants';
import { getAllFeedback, deleteFeedback, type HackathonFeedback } from '@/lib/firestore/feedback';
import { getAllSubmissions, deleteSubmission, type ProjectSubmission } from '@/lib/firestore/submissions';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';
import { isValidEmail } from '@/lib/constants';
import AdminLogin from './components/AdminLogin';
import TeamsTab from './components/TeamsTab';
import FeedbackTab from './components/FeedbackTab';
import SubmissionsTab from './components/SubmissionsTab';

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

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ADMIN_PASSWORD) {
      setError('Admin password not configured. Contact the administrator.');
      return;
    }
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

    if (!isValidEmail(newMemberEmail)) {
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
      <AdminLogin
        password={password}
        setPassword={setPassword}
        error={error}
        onLogin={handleLogin}
      />
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
            <TeamsTab
              teams={teams}
              loading={loading}
              actionLoading={actionLoading}
              expandedTeam={expandedTeam}
              setExpandedTeam={setExpandedTeam}
              newMemberName={newMemberName}
              setNewMemberName={setNewMemberName}
              newMemberEmail={newMemberEmail}
              setNewMemberEmail={setNewMemberEmail}
              addMemberLoading={addMemberLoading}
              onRefresh={loadTeams}
              onLockAll={handleLockAll}
              onExportCSV={exportToCSV}
              onToggleLock={handleToggleLock}
              onDeleteTeam={handleDeleteTeam}
              onAddMember={handleAddMember}
              onRemoveMember={handleRemoveMember}
            />
          )}

          {/* Feedback Tab Content */}
          {activeTab === 'feedback' && (
            <FeedbackTab
              feedback={feedback}
              feedbackLoading={feedbackLoading}
              actionLoading={actionLoading}
              expandedFeedback={expandedFeedback}
              setExpandedFeedback={setExpandedFeedback}
              onRefresh={loadFeedback}
              onExportCSV={exportFeedbackToCSV}
              onDeleteFeedback={handleDeleteFeedback}
              getAverageRating={getAverageRating}
            />
          )}

          {/* Submissions Tab Content */}
          {activeTab === 'submissions' && (
            <SubmissionsTab
              submissions={submissions}
              submissionsLoading={submissionsLoading}
              actionLoading={actionLoading}
              expandedSubmission={expandedSubmission}
              setExpandedSubmission={setExpandedSubmission}
              onRefresh={loadSubmissions}
              onExportCSV={exportSubmissionsToCSV}
              onDeleteSubmission={handleDeleteSubmission}
            />
          )}
        </div>
      </div>
    </div>
  );
}
