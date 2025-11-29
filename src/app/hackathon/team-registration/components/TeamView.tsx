'use client';

import { useState } from 'react';
import { updateTeamName, updateTeamChallenge, getTeamById, toggleTeamLock } from '@/lib/firestore/teams';
import type { Team, ChallengeType } from '@/types/team';
import { CHALLENGES } from '@/types/team';
import MemberList from './MemberList';

interface TeamViewProps {
  team: Team;
  onTeamUpdated: (team: Team) => void;
}

export default function TeamView({ team: initialTeam, onTeamUpdated }: TeamViewProps) {
  const [team, setTeam] = useState<Team>(initialTeam);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingChallenge, setIsEditingChallenge] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team.teamName);
  const [newChallenge, setNewChallenge] = useState<ChallengeType>(team.challenge);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showLockConfirm, setShowLockConfirm] = useState(false);
  const [lockLoading, setLockLoading] = useState(false);

  const teamChallenge = CHALLENGES.find(c => c.id === team.challenge);
  const DISPLAY_MAX_MEMBERS = 4;

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

  const handleUpdateChallenge = async () => {
    if (newChallenge === team.challenge) {
      setIsEditingChallenge(false);
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await updateTeamChallenge(team.id, newChallenge);
      const updatedTeam = await getTeamById(team.id);
      if (updatedTeam) {
        setTeam(updatedTeam);
        onTeamUpdated(updatedTeam);
        setSuccess('Challenge updated successfully!');
        setIsEditingChallenge(false);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      console.error('Error updating challenge:', err);
      setError('Failed to update challenge. Please try again.');
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

  const handleLockTeam = async () => {
    setLockLoading(true);
    setError('');

    try {
      await toggleTeamLock(team.id, true);
      const updatedTeam = await getTeamById(team.id);
      if (updatedTeam) {
        setTeam(updatedTeam);
        onTeamUpdated(updatedTeam);
        setSuccess('Team locked successfully! Your team is now finalized.');
        setShowLockConfirm(false);
        setTimeout(() => setSuccess(''), 5000);
      }
    } catch (err) {
      console.error('Error locking team:', err);
      setError('Failed to lock team. Please try again.');
    } finally {
      setLockLoading(false);
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

      {/* Over Max Members Warning */}
      {team.members.length > DISPLAY_MAX_MEMBERS && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
            <p className="text-amber-800 text-sm font-medium">
              Your team has more than {DISPLAY_MAX_MEMBERS} members. Please confirm with the organizers that this is allowed before locking your team.
            </p>
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

        {/* Challenge Section */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {isEditingChallenge ? (
                <div>
                  <label className="block text-sm text-slate-900 font-medium mb-2">Challenge</label>
                  <select
                    value={newChallenge}
                    onChange={(e) => setNewChallenge(e.target.value as ChallengeType)}
                    className="w-full max-w-md px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    disabled={loading}
                  >
                    {CHALLENGES.map((challenge) => (
                      <option key={challenge.id} value={challenge.id}>
                        {challenge.name}
                      </option>
                    ))}
                  </select>

                  {/* Show description for selected challenge */}
                  {(() => {
                    const selectedChallenge = CHALLENGES.find(c => c.id === newChallenge);
                    if (!selectedChallenge) return null;
                    return (
                      <div className="mt-4 p-6 bg-blue-50 border-l-4 border-blue-700 rounded-lg">
                        <h4 className="font-bold text-slate-900 text-lg">{selectedChallenge.name}</h4>
                        <p className="text-blue-700 font-medium mb-4">{selectedChallenge.subtitle}</p>
                        <div className="text-sm text-slate-900 space-y-3 max-h-64 overflow-y-auto pr-2">
                          {selectedChallenge.description.split('\n\n').map((paragraph, idx) => {
                            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                            return (
                              <p key={idx}>
                                {parts.map((part, partIdx) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                                  }
                                  const linkParts = part.split(/(https?:\/\/[^\s]+)/g);
                                  return linkParts.map((linkPart, linkIdx) => {
                                    if (linkPart.match(/^https?:\/\//)) {
                                      return (
                                        <a
                                          key={`${partIdx}-${linkIdx}`}
                                          href={linkPart}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-700 hover:underline break-all"
                                        >
                                          {linkPart}
                                        </a>
                                      );
                                    }
                                    return linkPart;
                                  });
                                })}
                              </p>
                            );
                          })}
                        </div>
                        {selectedChallenge.downloadUrl && (
                          <a
                            href={selectedChallenge.downloadUrl}
                            download
                            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition-all duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            {selectedChallenge.downloadLabel || 'Download File'}
                          </a>
                        )}
                      </div>
                    );
                  })()}

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={handleUpdateChallenge}
                      disabled={loading}
                      className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingChallenge(false);
                        setNewChallenge(team.challenge);
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
                <div className="w-full">
                  <p className="text-sm text-slate-900 font-medium mb-1">Challenge</p>
                  <p className="text-2xl font-bold text-blue-700 mb-4">{teamChallenge?.name || 'Not selected'}</p>

                  {/* Show challenge details with download link */}
                  {teamChallenge && (
                    <div className="p-6 bg-blue-50 border-l-4 border-blue-700 rounded-lg">
                      <h4 className="font-bold text-slate-900 text-lg">{teamChallenge.name}</h4>
                      <p className="text-blue-700 font-medium mb-4">{teamChallenge.subtitle}</p>
                      <div className="text-sm text-slate-900 space-y-3 max-h-64 overflow-y-auto pr-2">
                        {teamChallenge.description.split('\n\n').map((paragraph, idx) => {
                          const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                          return (
                            <p key={idx}>
                              {parts.map((part, partIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                                }
                                const linkParts = part.split(/(https?:\/\/[^\s]+)/g);
                                return linkParts.map((linkPart, linkIdx) => {
                                  if (linkPart.match(/^https?:\/\//)) {
                                    return (
                                      <a
                                        key={`${partIdx}-${linkIdx}`}
                                        href={linkPart}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:underline break-all"
                                      >
                                        {linkPart}
                                      </a>
                                    );
                                  }
                                  return linkPart;
                                });
                              })}
                            </p>
                          );
                        })}
                      </div>
                      {teamChallenge.downloadUrl && (
                        <a
                          href={teamChallenge.downloadUrl}
                          download
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          {teamChallenge.downloadLabel || 'Download File'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {!isEditingChallenge && !team.locked && (
              <button
                onClick={() => setIsEditingChallenge(true)}
                className="ml-4 px-4 py-2 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition"
              >
                Edit Challenge
              </button>
            )}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-900 font-medium mb-1">Team Size</p>
            <p className="text-2xl font-bold text-slate-900">{team.members.length} / {DISPLAY_MAX_MEMBERS}</p>
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

      {/* Lock Team Section */}
      {!team.locked && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Finalize Your Team</h3>
          <p className="text-slate-600 mb-6">
            Once you&apos;re happy with your team composition, lock it in to confirm your participation.
          </p>

          {/* Recommendation notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              <div>
                <p className="text-amber-800 text-sm font-semibold">Recommendation</p>
                <p className="text-amber-700 text-sm">We recommend having at least one team member with a technical background (AI/Tech, programming experience) for the best hackathon experience.</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowLockConfirm(true)}
            className="w-full px-6 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            Lock In Team
          </button>
        </div>
      )}

      {/* Lock Confirmation Modal */}
      {showLockConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Lock Your Team?</h3>
              <p className="text-slate-600">
                This action is <span className="font-semibold text-red-600">final and cannot be undone</span>. Once locked, you will not be able to:
              </p>
            </div>

            <ul className="text-sm text-slate-700 space-y-2 mb-6 bg-slate-50 p-4 rounded-lg">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                Change your team name
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                Add or remove team members
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                Change your selected challenge
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Team Summary:</span><br />
                <span className="font-medium">{team.teamName}</span> with {team.members.length} member{team.members.length !== 1 ? 's' : ''}<br />
                Challenge: {teamChallenge?.name || 'Not selected'}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLockConfirm(false)}
                disabled={lockLoading}
                className="flex-1 px-4 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleLockTeam}
                disabled={lockLoading}
                className="flex-1 px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {lockLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Locking...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                    </svg>
                    Yes, Lock My Team
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

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
          {team.locked && <li>• Your team is locked and finalized</li>}
        </ul>
      </div>
    </div>
  );
}
