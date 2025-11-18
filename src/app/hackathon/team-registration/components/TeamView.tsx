'use client';

import { useState } from 'react';
import { updateTeamName, getTeamById } from '@/lib/firestore/teams';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';
import MemberList from './MemberList';

interface TeamViewProps {
  team: Team;
  onTeamUpdated: (team: Team) => void;
}

export default function TeamView({ team: initialTeam, onTeamUpdated }: TeamViewProps) {
  const [team, setTeam] = useState<Team>(initialTeam);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team.teamName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const teamChallenge = CHALLENGES.find(c => c.id === team.challenge);

  const handleUpdateTeamName = async () => {
    if (!newTeamName.trim()) {
      setError('Team name cannot be empty');
      return;
    }

    if (newTeamName.trim() === team.teamName) {
      setIsEditingName(false);
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await updateTeamName(team.id, newTeamName.trim());
      const updatedTeam = await getTeamById(team.id);
      if (updatedTeam) {
        setTeam(updatedTeam);
        onTeamUpdated(updatedTeam);
        setSuccess('Team name updated successfully!');
        setIsEditingName(false);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      console.error('Error updating team name:', err);
      setError('Failed to update team name. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMembersUpdated = async () => {
    try {
      const updatedTeam = await getTeamById(team.id);
      if (updatedTeam) {
        setTeam(updatedTeam);
        onTeamUpdated(updatedTeam);
      }
    } catch (err) {
      console.error('Error refreshing team:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p className="text-green-700 text-sm font-medium">{success}</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
            </svg>
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Team Locked Warning */}
      {team.locked && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="text-amber-800 text-sm font-semibold">Team Locked</p>
              <p className="text-amber-700 text-sm">Your team has been locked. Some editing features are restricted. Contact us if you need to make changes.</p>
            </div>
          </div>
        </div>
      )}

      {/* Team Name Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            {isEditingName ? (
              <div>
                <label className="block text-sm text-slate-900 font-medium mb-2">Team Name</label>
                <input
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  disabled={loading}
                  autoFocus
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleUpdateTeamName}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingName(false);
                      setNewTeamName(team.teamName);
                      setError('');
                    }}
                    disabled={loading}
                    className="px-4 py-2 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm text-slate-900 font-medium mb-1">Team Name</p>
                <h2 className="text-3xl font-bold text-slate-900">{team.teamName}</h2>
              </div>
            )}
          </div>

          {!isEditingName && !team.locked && (
            <button
              onClick={() => setIsEditingName(true)}
              className="ml-4 px-4 py-2 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition"
            >
              Edit Name
            </button>
          )}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-900 font-medium mb-1">Challenge</p>
            <p className="text-lg font-bold text-blue-700">{teamChallenge?.name || 'Not selected'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-900 font-medium mb-1">Team Size</p>
            <p className="text-2xl font-bold text-slate-900">{team.members.length} / {team.maxMembers}</p>
          </div>
          <div>
            <p className="text-sm text-slate-900 font-medium mb-1">Status</p>
            <div className="inline-flex items-center gap-1">
              {team.locked ? (
                <span className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                  </svg>
                  Locked
                </span>
              ) : (
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Active
                </span>
              )}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm text-slate-900 font-medium mb-1">Created</p>
            <p className="text-sm font-medium text-slate-900">
              {new Date(team.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Team Members</h3>
        <MemberList
          team={team}
          onMembersUpdated={handleMembersUpdated}
        />
      </div>

      {/* Help Info */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
          <svg className="w-5 h-5 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          Important Information
        </h4>
        <ul className="text-sm text-slate-900 space-y-1 ml-7">
          <li>• Save this page URL to access your team later</li>
          <li>• All team members must be registered on Luma</li>
          <li>• Contact us if you encounter any issues</li>
          {team.locked && <li>• Your team is locked. Contact organizers to make changes</li>}
        </ul>
      </div>
    </div>
  );
}
